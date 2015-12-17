class Api::FeedsourcesController < ApplicationController
  def index
    if current_user.nil?
      render json: "Not logged in.", status: 401
    else
      render json: current_user.feed_sources
    end
  end

  def feeds
    feedSource = FeedSource.find(params[:id])
    #make RSS request with specifications from feedSource above,
    #that will populate the feed_items table
    render json: feedSource.feeds
  end
end
