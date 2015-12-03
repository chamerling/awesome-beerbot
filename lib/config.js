'use strict';

var token = process.env.SLACK_TOKEN;
var twitter = {
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_TOKEN_SECRET
};

module.exports = {
  token: token,
    silent: false,
    logger: {
      level: process.env.NODE_ENV === 'production' ? 'info' : 'debug'
    },
    plugins: [
      {
        name: 'beerbot-hublin',
        response: 'Your Hubl.in conference is ready at '
      },
      {
        name: 'beerbot-hublin',
        response: 'Your Devlin conference is ready at ',
        endpoint: 'https://devlin.open-paas.org',
        match: /!devlin (.*)/i
      },
      {
        name: 'beerbot-giphy',
        listen_on: ['#jenkins'],
        reply_on: '#general',
        response: 'Build failure, let\'s have beer!',
        match: /Failure after/,
        term: 'beer'
      },
      {
        name: 'beerbot-giphy',
        listen_on: ['#jenkins'],
        reply_on: '#general',
        response: 'Yeah, build is back!',
        match: /Back to normal after/,
        term: 'celebrate'
      },
      {
        name: 'beerbot-giphy',
        response: ':beer: Beer? Beer! :beer:',
        match: /beer/,
        term: 'beer'
      },
      {
        name: 'beerbot-twitterstream',
        consumer_key: twitter.consumer_key,
        consumer_secret: twitter.consumer_secret,
        access_token_key: twitter.access_token_key,
        access_token_secret: twitter.access_token_secret,

        trackers: [
          {
            track: 'openpaas',
            channel: '#twitter'
          },
          {
            track: 'hublin',
            channel: '#twitter'
          }
        ]
      }
    ]
};
