class FeedSource < ActiveRecord::Base

  has_many :user_feed_sources,
    class_name: 'UserFeedSource',
    foreign_key: :feed_source_id,
    primary_key: :id

  has_many :feeds,
    class_name: 'FeedItem',
    foreign_key: :feed_source_id,
    primary_key: :id

end
