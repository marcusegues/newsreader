class FeedSource < ActiveRecord::Base
  validates :url, :category, presence: true;

  has_many :user_feed_sources,
    class_name: 'UserFeedSource',
    foreign_key: :feed_source_id,
    primary_key: :id

  has_many :users,
    through: :user_feed_sources,
    source: :user

  has_many :feeds,
    class_name: 'FeedItem',
    foreign_key: :feed_source_id,
    primary_key: :id

end
