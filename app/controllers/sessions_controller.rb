class SessionsController < ApplicationController

  def create
    debugger;
    @user = User.find_by_credentials(session_params[:username], session_params[:password])
    if @user.nil?
      flash.now[:errors] = ["User with that username/password not found."]
      render :new
    else
      sign_in!(@user)
      redirect_to user_url(@user)
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
