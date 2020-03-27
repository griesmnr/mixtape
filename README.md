# Mixtape JS- an API for users who want to build playlists for their friends.

This is the first node API I've built from scratch in a while. There is a lot that I've learned and there's a lot left to do on it.

Here's a list of my upcoming TODOs, involving this repo and related to things I learned:

1) Add layer of abstraction on the database, in the form of modules for each db query, so that I can mock those modules in jest, and not modify the real database.
2) Automate web application setup process further by updating base_repo_with_fixins repo with lessons learned during this app.
3) Finish jest tests once #1 is done.
4) Figure out what to do with security warnings involving dependencies of dependencies.
5) Add health endpoint to base_repo_with_fixins, along with tests
6) Add router/app/server to base repo
7) Make decisions about logging layer
