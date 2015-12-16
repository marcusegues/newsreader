class Api::SessionsController < ApplicationController

  def create
    user = User.find_by_credentials(session_params[:username], session_params[:password])
    if user.nil?
      render json: ["couldn't find user"], status: 404
    else
      sign_in!(user)
      render json: user
    end
  end

  def destroy
    sign_out!
    redirect_to new_session_url
  end

  private
  def session_params
    params.require(:session).permit(:username, :password)
  end
end
