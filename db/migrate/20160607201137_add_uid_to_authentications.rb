class AddUidToAuthentications < ActiveRecord::Migration
  def change
    add_column :authentications, :uid, :string, null: false
  end
end
