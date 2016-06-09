todayFeedsAR = todayFeeds

json.extract! @user, :id

json.todayFeeds todayFeedsAR

json.feedSources @user.feed_sources

json.unreadCount allFeedSourcesUnreadCount

json.todayFeedsUnreadCount countUnread(todayFeedsAR)

json.userAvatar @user.avatar_url

json.loginMethod login_method

json.username @user.username
