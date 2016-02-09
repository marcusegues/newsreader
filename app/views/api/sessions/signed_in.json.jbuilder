json.extract! @user, :id

json.todayFeeds sortFeeds(@user.feeds
                    .select("feed_items.*")
                    .where("feed_items.published BETWEEN ? AND ?", DateTime.now - 7.day, DateTime.now))

json.feedSources @user.feed_sources
