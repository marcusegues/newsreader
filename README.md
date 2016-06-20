# newsreader
Inspired by Feedly.

This project can be viewed on a local server by running rails s on the command line and navigating to http:localhost:3000. 
It can also be viewed at swissfeeds.marcusegues.io.

Single-page web app, newsreader inspired by Feedly.  

RESTful JSON API for efficient interaction between frontend and backend.
Uses custom-built authentication system, hashing and salting passwords with BCrypt.
Facebook authentication utilizes Facebook JS SDK and Omniauth.
JBuilder data serialization retrieves nested data from associated database entries.
Uses Kaminari gem for pagination when viewing feeds for an infinite scroll experience.
Ajax requests used for all frontend initiated actions, including to provide automatic updates of feeds.
Uses React Router to define and manage front-end URLs.
Bundles modules using Webpack.
