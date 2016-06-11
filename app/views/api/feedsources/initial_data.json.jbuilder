todayFeedsAR = todayFeeds

json.todayFeeds todayFeedsAR

json.todayFeedsUnreadCount countUnread(todayFeedsAR)

json.unreadCount allFeedSourcesUnreadCount

json.extract! current_user, :id

json.feedSources current_user.feed_sources

json.avatar_url current_user.avatar_url

json.login_method logged_in_method

json.username current_user.username

json.facebook_username current_user.facebook_username
