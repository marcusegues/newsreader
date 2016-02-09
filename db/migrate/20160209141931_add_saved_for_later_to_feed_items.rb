class AddSavedForLaterToFeedItems < ActiveRecord::Migration
  def change
    add_column :feed_items, :saved_for_later, :boolean, default: false
  end
end
