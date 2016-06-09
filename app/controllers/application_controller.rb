class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  helper_method :signed_in?, :current_user, :sortFeeds,
    :allFeedSourcesUnreadCount, :countUnread, :todayFeeds, :logged_in_method

  def require_login
    unless signed_in?
      flash[:errors] = ["Need to be signed in."]
      redirect_to new_session_url unless signed_in?
    end
  end

  def current_user
    return nil if session[:session_token].nil?
    @current_user = User.find_by(session_token: session[:session_token])
  end

  def sign_in!(user)
    @current_user = user
    session[:session_token] = user.session_token
    session[:login_method] =  login_method
  end

  def sign_out!
    current_user.reset_session_token!
    session[:session_token] = nil
    reset_login_method
  end

  def signed_in?
    !!current_user
  end

  def login_method=(login_provider)
    @login_method = login_provider
  end

  def login_method
    @login_method
  end

  def logged_in_method
    session[:login_method]
  end

  def reset_login_method
    @login_method = nil
    session[:login_method] = nil
  end

  def sortFeeds(feeds)
    # sort from earliest to latest
    sortedFeeds =  feeds.sort do |x,y|
      xComp = x.updated || x.published
      yComp = y.updated || y.published
      yComp <=> xComp
    end

    return sortedFeeds
  end

  def allFeedSourcesUnreadCount
    unreadCountHash = {}
    current_user.feed_sources.includes(:feeds).each do |feedSource|
      unreadCountHash[feedSource.id] = feedSource.feeds.to_a.count {|feed| feed.unread == true}
    end

    render json: unreadCountHash
  end

  def todayFeeds
    # sortFeeds(current_user.feeds
    #                 .select("feed_items.*")
    #                 .where("feed_items.published BETWEEN ? AND ?", DateTime.now - 7.day, DateTime.now))
    current_user.feeds
                .select("feed_items.*")
                .where("feed_items.published BETWEEN ? AND ?", DateTime.now - 7.day, DateTime.now)
                .order('published DESC')
                .reorder("updated DESC")
  end

  def countUnread(feeds)
    feeds.to_a.count {|feed| feed.unread == true}
  end
end
