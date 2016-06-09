class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(session_params[:username], session_params[:password])
    if @user.nil?
      render json: ["couldn't find user"], status: 404
    else
      sign_in!(@user)
      self.login_method = "swissfeeds"
      render :signed_in
    end
  end

  def destroy
    sign_out!
    render json: {message: "signed out"}
  end

  private
  def session_params
    params.require(:session).permit(:username, :password)
  end
end
