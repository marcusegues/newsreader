class AddCategoryToFeedSources < ActiveRecord::Migration
  def change
    add_column :feed_sources, :category, :string, default: "uncategorized"
  end
end
