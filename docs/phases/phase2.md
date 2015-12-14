# Phase 2: Flux Architecture and RSS Subscriptions (2 days)
Phase 2 is focused on setting up the basics of Flux, the React Router, and the React view structure for the main application. At the end of Phase 2, a logged in user will be able to subscribe to an RSS feed, with new FeedItems being saved to the database and old ones being destroyed (only feeds x number of days old will be saved in the database). Therefore, priority is getting RSS subscriptions working.

## Rails
### Models
* FeedSource
* UserFeedSources
* FeedItem

### Controllers
* FeedSource (create, update, destroy)
* UserFeedSources (create, update, destroy)
* FeedItem (create, update, destroy)

### Views

## Flux
### Views (React Components)
* UserControl
* CategoriesIndex
* CategoryItem
* FeedSource
* FeedsWindow
* FeedItemsIndex
* FeedItem
* FeedOptions

### Stores

### Actions
* ApiActions.subscribe -> triggered by ApiUtil

### ApiUtil

## Gems/Libraries
* Flux Dispatcher (npm)
