# Phase 3: Displaying Feeds (2 days)
After the basic Flux architecture has been set up, a Feed store will be implemented and a set of actions corresponding to the needed CRUD functionality created.
Organization of the RSS feed subscriptions is also a focus. A FeedSource (a subscription) belongs to a Category (which is essentially a folder with many subscriptions). User interaction with the Categories component generates changes to the FeedsWindow component, listing all feeds corresponding to the chosen FeedSource or CategoryItem that the user clicked on in the Categories component. Upon clicking one of the FeedItems, we will obtain, at the end of this stage, a simple version of the feed (a version that doesn't heavily parse the RSS).

## Rails
### Models
* FeedCategory

### Controllers


### Views

## Flux
### Views (React Components)

### Stores
* Feed

### Actions


### ApiUtil

## Gems/Libraries
