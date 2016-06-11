class Api::UserFeedSourcesController < ApplicationController
  def create
    debugger;
    @feedSource = FeedSource.find_by(userFeedSources_params) ||
                  FeedSource.new(userFeedSources_params)

    @feedSource.user_feed_sources.build({user_id: current_user.id})
    if @feedSource.save
      @page = 1
      @orderedFeeds = feedsById(@feedSource.id, @page)
      render :feeds_data
    else
      render json: @userFeedSource.errors.full_messages
    end
  end

  private
  def userFeedSources_params
    params.require(:userFeedSource).permit(:title, :url, :category);
  end
end
