class Api::AuthenticationsController < ApplicationController
  def create
    omniauth = request.env["omniauth.auth"]
    authentication = Authentication.find_by_provider_and_uid(omniauth['provider'], omniauth['uid'])
    # user already has an authentication from this provider
    # normal sign in process
    if authentication
      @user = User.find(authentication.user_id)
      self.login_method = authentication.provider
      sign_in!(@user)
      render :signed_in
    # user is already signed in and is adding an authentication from a new provider
    elsif current_user
      begin
        current_user.authentications.create!(provider: omniauth['provider'], uid: omniauth['uid'])
        current_user.avatar_url = omniauth['info']['image'] if authentication.provider == "facebook"
        self.login_method = authentication['provider']
        render json: ["Authentication created"]
      rescue
        render json: ["Unable to create new authentication"]
      end
    # completely new user trying to sign up with a provider
    else
      @user = User.new
      authentication = @user.authentications.build(provider: omniauth['provider'], uid: omniauth['uid'])
      if authentication.provider == "facebook"
        @user.facebook_username = omniauth['info']['name']
        @user.username = SecureRandom.urlsafe_base64(16)
        @user.password = SecureRandom.urlsafe_base64(16)
        @user.avatar_url = omniauth['info']['image']
      end
      if @user.save
        self.login_method = authentication['provider']
        sign_in!(@user)
        render :signed_in
      else
        render json: ["Unable to sign up."]
      end
    end
  end
end
