# Assure - A Safety App

Assure is a safety app designed to provide a sense of reassurance to its users. With the ability to notify your safety network and emergency services with one click, users can feel more confident going about their daily routines. 

We utilize Google Maps api to display all the incidents reported by the users, in hopes to increase awareness and build a sense of community. This app was built using React, NodeJS, and ExpressJS. Our database is persisted by an api using a PostgreSQL database.

### Screenshots

!['Homepage']()
!['SharingLocation']()
!['Map']()
!['Profile']()

### Setup

You need TWO terminal windows/tabs for this (or some other plan for running two Node processes).

In one terminal, `cd into react-front-end`. Run `npm install` or `yarn` to install the dependencies. Then run `npm start` or `yarn start`, and go to localhost:3000 in your browser.

In the other terminal, cd into express-back-end. Run `npm install` or `yarn` to install the dependencies, then `npm start` or `yarn start` to launch the server.
