class AddIndexToFeedSourcesUrl < ActiveRecord::Migration
  def change
    add_index :feed_sources, [:title, :url, :category], unique: true
  end
end
