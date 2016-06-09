class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      self.login_method = "swissfeeds"
      sign_in!(@user)
      render :signed_in
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private
  def user_params
    params.require(:user).permit(:password, :username)
  end
end
