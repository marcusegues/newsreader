class CreateUserFeedSources < ActiveRecord::Migration
  def change
    create_table :user_feed_sources do |t|
      t.integer :user_id, null: false
      t.integer :feed_source_id, null: false
      t.timestamps null: false
    end
    add_index :user_feed_sources, :user_id
    add_index :user_feed_sources, :feed_source_id
    add_index :user_feed_sources, [:user_id, :feed_source_id], unique: true
  end
end
