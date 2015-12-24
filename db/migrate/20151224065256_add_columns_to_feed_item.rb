class AddColumnsToFeedItem < ActiveRecord::Migration
  def change
    add_column :feed_items, :author, :string
    add_column :feed_items, :url, :string
    add_column :feed_items, :published, :date
    add_column :feed_items, :updated, :date
    add_column :feed_items, :summary, :text
    add_column :feed_items, :content, :text
  end
end
