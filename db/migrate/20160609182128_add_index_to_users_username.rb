class AddIndexToUsersUsername < ActiveRecord::Migration
  def change
    add_index :users, [:username, :password_digest], unique: true
  end
end
