class Api::ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  helper_method :signed_in?, :current_user

  def require_login
    unless signed_in?
      flash[:errors] = ["Need to be signed in."]
      redirect_to new_session_url unless signed_in?
    end
  end

  def current_user
    # render json: "" if session[:session_token].nil?
    # @current_user = User.find_by(session_token: session[:session_token])
    # render json: @current_user
    if session[:session_token].nil?
      render json: {}
    else
      @current_user = User.find_by(session_token: session[:session_token])
      render json: @current_user
    end
  end

  def sign_in!(user)
    @current_user = user
    session[:session_token] = user.session_token
  end

  def sign_out!
    current_user.reset_session_token!
    session[:session_token] = nil
  end

  def signed_in?
    !!current_user
  end
end
