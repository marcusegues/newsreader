class CreateFeedItems < ActiveRecord::Migration
  def change
    create_table :feed_items do |t|
      t.string :title, null: false
      t.integer :feed_source_id, null: false
      t.timestamps null: false
    end
  end
end
