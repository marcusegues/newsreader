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
FeedSource.create!(title: "longandvariable", url: "https://longandvariable.wordpress.com/feed/", category: "Economics")
FeedSource.create!(title: "Mainly Macro", url: "http://feeds.feedburner.com/MainlyMacro", category: "Economics")
FeedSource.create!(title: "Vox", url: "http://www.vox.com/rss/index.xml", category: "News")
FeedSource.create!(title: "Google Analytics", url: "http://feeds.feedburner.com/blogspot/tRaA", category: "Analytics")
FeedSource.create!(title: "Analytics Talk", url: "http://feeds.feedburner.com/AnalyticsTalk", category: "Analytics")
FeedSource.create!(title: "Flowing Data", url: "http://flowingdata.com/feed/", category: "Analytics")
FeedSource.create!(title: "Stratechery", url: "http://stratechery.com/feed/", category: "Tech")
FeedSource.create!(title: "Mashable", url: "http://feeds.mashable.com/Mashable?format=xml", category: "Tech")
FeedSource.create!(title: "The Fox is Black", url: "http://thefoxisblack.com/feed/atom/", category: "Design")


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
