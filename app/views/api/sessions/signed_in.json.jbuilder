todayFeedsAR = todayFeeds

json.extract! @user, :id

json.todayFeeds todayFeedsAR

json.feedSources @user.feed_sources

json.unreadCount allFeedSourcesUnreadCount

json.todayFeedsUnreadCount countUnread(todayFeedsAR)
