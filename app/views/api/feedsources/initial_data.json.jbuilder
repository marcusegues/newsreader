todayFeedsAR = todayFeeds

json.extract! current_user, :id

json.todayFeeds todayFeedsAR

json.feedSources current_user.feed_sources

json.unreadCount allFeedSourcesUnreadCount

json.todayFeedsUnreadCount countUnread(todayFeedsAR)

json.userAvatar current_user.avatar_url

json.loginMethod login_method

json.username current_user.username
