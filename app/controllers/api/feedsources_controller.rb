class Api::FeedsourcesController < ApplicationController
  def index
    if current_user.nil?
      render json: "Not logged in.", status: 401
    else
      render json: current_user.feed_sources
    end
  end

  def feeds
    feedSourceId = params[:id]
    feedSource = FeedSource.find(feedSourceId)
    url = feedSource.url
    parsedFeed = Feedjira::Feed.fetch_and_parse url
    parsedFeed.entries.each do |feedItem|
      FeedItem.create!(title: feedItem.title, feed_source_id: feedSourceId)
    end
    render json: feedSource.feeds
  end
end
