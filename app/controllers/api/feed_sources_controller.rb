class Api::FeedSourcesController < ApplicationController
  def index
    if current_user.nil?
      render json: "Not logged in.", status: 401
    else
      render json: current_user.feed_sources
    end
  end
end
