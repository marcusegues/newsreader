class Api::FeedsourcesController < ApplicationController
  def index
    if current_user.nil?
      render json: "Not logged in.", status: 401
    else
      render json: current_user.feed_sources
    end
  end

  def create
    newFeedSource = FeedSource.new(feedSources_params)
    if newFeedSource.save
      render json: newFeedSource
    else
      render json: newFeedSource.errors.full_messages, status: 422
    end

  end

  def feeds
    feedSourceId = params[:id]
    feedSource = FeedSource.find(feedSourceId)
    url = feedSource.url
    parsedFeed = Feedjira::Feed.fetch_and_parse url

    parsedFeed.entries.each do |feedItem|
      # uniqueness of FeedItem is based on it's url
      # the FeedItems in this loop will only be save to the database once
      FeedItem.create(title: feedItem.title,
                       feed_source_id: feedSourceId,
                       author: feedItem.author,
                       url: feedItem.url,
                       published: feedItem.published,
                       updated: feedItem.updated,
                       summary: feedItem.summary,
                       content: feedItem.content)
    end


    # orderedFeeds = sortFeeds(feedSource.feeds)
    orderedFeeds = feedSource.feeds.sort do |x,y|
      xComp = x.updated || x.published
      yComp = y.updated || y.published
      yComp <=> xComp
    end

    render json: orderedFeeds
  end

  def todayFeeds
    render json: sortFeeds(current_user.feeds
                     .select("feed_items.*")
                     .where("feed_items.published BETWEEN ? AND ?", DateTime.now - 7.day, DateTime.now))
  end

  private
  def feedSources_params
    params.require(:feedSource).permit(:title, :url, :category);
  end
end
