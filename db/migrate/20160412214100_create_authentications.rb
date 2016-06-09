class CreateAuthentications < ActiveRecord::Migration
  def change
    create_table :authentications do |t|
      t.string :provider, null: false
      t.string :user_id, null: false 

      t.timestamps null: false
    end
  end
end
