class AddDefaultValueToAvatarUrlInUsers < ActiveRecord::Migration
  def change
    change_column :users, :avatar_url, :string, default: User::DEFAULT_AVATAR_URL
  end
end
