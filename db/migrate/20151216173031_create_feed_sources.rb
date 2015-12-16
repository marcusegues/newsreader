class CreateFeedSources < ActiveRecord::Migration
  def change
    create_table :feed_sources do |t|
      t.string :title, null: false
      t.string :url, null: false
      t.integer :category_id, null: false
      t.timestamps null: false
    end
    add_index :feed_sources, :url, unique: true
  end
end
