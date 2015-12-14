# FresherNote

[Heroku link][heroku] **NB:** This should be a link to your production site

[heroku]: http://www.herokuapp.com

## Minimum Viable Product

FeedBlur is a webapplication inspired by Newsblur and Feedly, built using Ruby on Rails and React.js.
FeedBlur allows users to:

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

FresherNote is a web application inspired by Evernote built using Ruby on Rails
and React.js. FresherNote allows users to:

<!-- This is a Markdown checklist. Use it to keep track of your progress! -->

- [ ] Create an account
- [ ] Log in / Log out
- [ ] Create, read, edit, and delete notes
- [ ] Organize notes within Notebooks
- [ ] Tag notes with multiple tags and search notes by tag
- [ ] Search through notes for blocks of text
- [ ] Apply complex styling to notes while editing
- [ ] Set reminders on notes

## Design Docs
* [View Wireframes][view]
* [DB schema][schema]

[view]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication, Note Model and JSON API (1.5 days)

In Phase 1, I will begin by implementing user signup and authentication (using
BCrypt). There will be a basic landing page after signup that will contain the
container for the application's root React component. Before building out the
front end, I will begin by setting up a full JSON API for Notes.

[Details][phase-one]

### Phase 2: Flux Architecture and Note CRUD (2.5 days)

Phase 2 is focused on setting up Flux, the React Router, and the React view
structure for the main application. After the basic Flux architecture has been
set up, a Note store will be implemented and a set of actions corresponding to
the needed CRUD functionality created. Once this is done, I will create React
views for the Notes `Index`, `IndexItem` and `Form`. At the end of Phase 2,
Notes can be created, read, edited and destroyed in the browser. Notes should
save to the database when the form loses focus or is left idle after editing.
Lastly, while constructing the views I will start using basic bootstrap for
styling.

[Details][phase-two]

### Phase 3: Notebooks and Tags (2 days)

Phase 3 adds organization to the Notes. Notes belong to a Notebook, which has
its own `Index` view. Create JSON API for Notebooks. Notes can also now be
tagged with multiple tags. Users can bring up notes in a separate `SearchIndex`
view by searching for their tags. Once the tag search is implemented, I will
extend this to a fuzzy search through every Note's content.

[Details][phase-three]

### Phase 4: Allow Complex Styling in Notes (1 day)

Using the react-quill library (based on Quill.js), allow for complex styling of
notes.

[Details][phase-four]

### Phase 5: Reminders and Garbage Collection (1 day)

Phase 5 introduces two new features. First, users can set reminders on notes
which will at the time they are set for prompt the user to review and edit the
given note. In addition, I will implement a feature that asks users to review
notes once they reach a certain age and ask whether they should be kept,
archived, or deleted.

[Details][phase-five]

### Phase 6: Styling Cleanup and Seeding (1 day)

Bootstrap will have been used to keep things organized up until now, but in
Phase 6 I will add styling flourishes and make modals out of some elements (like
the NotebookForm).

### Bonus Features (TBD)
- [ ] Prettify transitions
- [ ] Use javascript library for cleaner tag selection
- [ ] Changelogs for Notes
- [ ] Pagination / infinite scroll for Notes Index
- [ ] Multiple sessions

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
