# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create!(username: "Guest User", password: "password")
User.create!(username: "mariana", password: "password")
User.create!(username: "maria", password: "password")
User.create!(username: "carlos", password: "password")
User.create!(username: "ramona", password: "password")


FeedSource.create!(title: "Econbrowser", url: "http://econbrowser.com/atom.xml", category: "Economics")
FeedSource.create!(title: "Calculated Risk", url: "http://feeds.feedburner.com/CalculatedRisk", category: "Economics")
FeedSource.create!(title: "Abnormal Returns", url: "http://feeds2.feedburner.com/abnormalreturns", category: "Economics")
FeedSource.create!(title: "Thomas Friedman NYT", url: "http://www.nytimes.com/svc/collections/v1/publish/www.nytimes.com/column/thomas-l-friedman/rss.xml", category: "News")
FeedSource.create!(title: "Google Analytics", url: "http://feeds.feedburner.com/blogspot/tRaA", category: "Analytics")
FeedSource.create!(title: "longandvariable", url: "https://longandvariable.wordpress.com/feed/", category: "Economics")
FeedSource.create!(title: "Interfluidity", url: "http://www.interfluidity.com/feed/rdf", category: "Economics")
FeedSource.create!(title: "Mashable", url: "http://feeds.mashable.com/Mashable?format=xml", category: "Tech")
FeedSource.create!(title: "Gizmodo", url: "http://gizmodo.com/rss", category: "Tech")
FeedSource.create!(title: "GigaOM", url: "https://gigaom.com/feed/", category: "Tech")
FeedSource.create!(title: "ZDNet", url: "http://feeds.feedburner.com/zdnet/microsoft", category: "Tech")
FeedSource.create!(title: "Computer World", url: "http://rss.computerworld.com/computerworld/news/feed?type=breaking_news", category: "Tech")
FeedSource.create!(title: "Digital Trends", url: "http://www.digitaltrends.com/feed/", category: "Tech")
FeedSource.create!(title: "LifeHacker", url: "http://feeds.gawker.com/lifehacker/full", category: "Tech")
# FeedSource.create!(title: "ESPN", url: "http://sports-ak.espn.go.com/espn/rss/news", category: "Sports")
# FeedSource.create!(title: "NBA News", url: "http://www.nba.com/rss/nba_rss.xml", category: "Sports")

UserFeedSource.create!(user_id: 1, feed_source_id: 1)
UserFeedSource.create!(user_id: 1, feed_source_id: 2)
UserFeedSource.create!(user_id: 1, feed_source_id: 3)
UserFeedSource.create!(user_id: 1, feed_source_id: 4)
UserFeedSource.create!(user_id: 1, feed_source_id: 5)
UserFeedSource.create!(user_id: 1, feed_source_id: 6)
UserFeedSource.create!(user_id: 1, feed_source_id: 7)
UserFeedSource.create!(user_id: 1, feed_source_id: 8)
UserFeedSource.create!(user_id: 1, feed_source_id: 9)
UserFeedSource.create!(user_id: 1, feed_source_id: 10)
UserFeedSource.create!(user_id: 1, feed_source_id: 11)
UserFeedSource.create!(user_id: 1, feed_source_id: 12)
UserFeedSource.create!(user_id: 1, feed_source_id: 13)
UserFeedSource.create!(user_id: 1, feed_source_id: 14)
UserFeedSource.create!(user_id: 1, feed_source_id: 15)
UserFeedSource.create!(user_id: 1, feed_source_id: 16)
UserFeedSource.create!(user_id: 1, feed_source_id: 17)
