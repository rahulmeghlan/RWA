'use strict';

// Use local.env.js for environment variables that grunt will set when the server starts locally.
// Use for your api keys, secrets, etc. This file should not be tracked by git.
//
// You will need to set these on the server you deploy to.

module.exports = {
  DOMAIN: 'http://localhost:9000',
  SESSION_SECRET: "rwa-secret",

  FACEBOOK_ID: '30545702023',
  FACEBOOK_SECRET: 'd067ec8dd098422d52f8a28bd9c77f17',

  TWITTER_ID: 'L8qq9PZyRg6ieKGEKhZolGC0vJWLw8iEJ88DRdyOg',
  TWITTER_SECRET: 'L8qq9PZyRg6ieKGEKhZolGC0vJWLw8iEJ88DRdyOg',

  GOOGLE_ID: '326756929239',
  GOOGLE_SECRET: 'AIzaSyDMCJSaR2PWKhUoJX1T4Ad4Wjq3r2p-mq0',

  // Control debug level for modules using visionmedia/debug
  DEBUG: ''
};
