class ChangeDateToDateTimeInFeedItems < ActiveRecord::Migration
  def change
    change_column :feed_items, :published, :datetime
    change_column :feed_items, :updated, :datetime
  end
end
