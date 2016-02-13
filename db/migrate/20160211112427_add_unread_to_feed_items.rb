class AddUnreadToFeedItems < ActiveRecord::Migration
  def change
    add_column :feed_items, :unread, :boolean, default: true
  end
end
