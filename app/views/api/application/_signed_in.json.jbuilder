todayFeedsAR = todayFeeds

json.extract! @user, :id

json.todayFeeds todayFeedsAR

json.feedSources @user.feed_sources

json.unreadCount allFeedSourcesUnreadCount

json.todayFeedsUnreadCount countUnread(todayFeedsAR)

json.avatar_url @user.avatar_url

json.login_method logged_in_method

json.username @user.username

json.facebook_username @user.facebook_username
