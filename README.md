# FresherNote

[Heroku link][heroku] **NB:** This should be a link to your production site

[heroku]: http://www.herokuapp.com

## Minimum Viable Product

SmarterFeeds is a webapplication inspired by Newsblur built using Ruby on Rails and React.js.
SmarterFeeds allows users to:

- [ ] Create an account.
- [ ] Log in / Log out.
- [ ] Subscribe to RSS feeds.
- [ ] View Content from RSS feeds (title view which onClick expands into new tab with the content).
- [ ] Organize list of subscribed feeds into groups with names of their choosing.
- [ ] Have a view where they can manage their groups using drag and drop into/out of groups
- [ ] Save selected feeds to a list of "to read later"
- [ ] Save selected feeds to a list of "must reads"


Extras
- [ ] Add preferences tab lets user choose different options for site interaction, such as:
  - [ ] Which page to load on startup (Today, Must Reads, All)
  - [ ] View Setting (Titles only (default), Magazine, Full Article)
  - [ ] Hide posts once you've read them
  - [ ] Color of links for read/unread articles (RGB input from user, with default values)
  - [ ] Reading experience options (font family, size)
  - [ ] Option to append #category #feedly to tweets sent out through feedly
- [ ] Have a profile, with private and public portions of their subscriptions
- [ ] Share subscriptions or particular feeds with other users
- [ ] Save feeds to a "This week's reading list", so they keep track of what they've read and considered relevant
- [ ] Integration with Gmail, Evernote, Pinterest, Twitter, Facebook

## Design Docs
* [View Wireframes][view]
* [DB schema][schema]

[view]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication, Note Model and JSON API (1.5 days)

In Phase 1, I will begin by implementing user signup and authentication (using BCrypt). There will be a single page where the user can sign up or login from. I will also try to learn more about how to actually work with RSS feeds.

[Details][phase-one]

### Phase 2: Flux Architecture and RSS Subscriptions (2 days)

Phase 2 is focused on setting up the basics of Flux, the React Router, and the React view structure for the main application. At the end of Phase 2, a logged in user will be able to subscribe to an RSS feed, with new FeedItems being saved to the database and old ones being destroyed (only feeds x number of days old will be saved in the database). Therefore, priority is getting RSS subscriptions working.

[Details][phase-two]

### Phase 3: Displaying Feeds (2 days)

After the basic Flux architecture has been set up, a Feed store will be implemented and a set of actions corresponding to the needed CRUD functionality created.
Organization of the RSS feed subscriptions is also a focus. A FeedSource (a subscription) belongs to a Category (which is essentially a folder with many subscriptions). User interaction with the Categories component generates changes to the FeedsWindow component, listing all feeds corresponding to the chosen FeedSource or CategoryItem that the user clicked on in the Categories component. Upon clicking one of the FeedItems, we will obtain, at the end of this stage, a simple version of the feed (a version that doesn't heavily parse the RSS).

[Details][phase-three]

### # Phase 4: Parsing RSS Feeds (2 days)

This phase focuses on learning more about the RSS specification and how to standardize display of feeds.

[Details][phase-four]

# Phase 5: Styling (2 days)
This phase focuses on making the app look great.

[Details][phase-five]

### Bonus Features (TBD)


[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
