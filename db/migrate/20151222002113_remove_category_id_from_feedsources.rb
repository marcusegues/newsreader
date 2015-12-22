class RemoveCategoryIdFromFeedsources < ActiveRecord::Migration
  def change
    remove_column :feed_sources, :category_id
  end
end
