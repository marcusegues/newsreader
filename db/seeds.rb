# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create!(username: "marcus", password: "password")
User.create!(username: "mariana", password: "password")
User.create!(username: "maria", password: "password")
User.create!(username: "carlos", password: "password")
User.create!(username: "ramona", password: "password")

FeedSource.create!(title: "Econbrowser", url: "http://econbrowser.com/atom.xml", category_id: 0)
FeedSource.create!(title: "Calculated Risk", url: "http://feeds.feedburner.com/CalculatedRisk", category_id: 0)
FeedSource.create!(title: "Abnormal Returns", url: "http://feeds2.feedburner.com/abnormalreturns", category_id: 0)
FeedSource.create!(title: "Thomas Friedman NYT", url: "http://www.nytimes.com/svc/collections/v1/publish/www.nytimes.com/column/thomas-l-friedman/rss.xml", category_id: 0)
FeedSource.create!(title: "Google Analytics", url: "http://feeds.feedburner.com/blogspot/tRaA", category_id: 0)

UserFeedSource.create!(user_id: 1, feed_source_id: 1)
UserFeedSource.create!(user_id: 1, feed_source_id: 2)
UserFeedSource.create!(user_id: 1, feed_source_id: 3)
UserFeedSource.create!(user_id: 1, feed_source_id: 4)
UserFeedSource.create!(user_id: 1, feed_source_id: 5)
