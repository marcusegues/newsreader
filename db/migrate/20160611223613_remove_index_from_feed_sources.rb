class RemoveIndexFromFeedSources < ActiveRecord::Migration
  def change
    remove_index :feed_sources, :url
  end
end
