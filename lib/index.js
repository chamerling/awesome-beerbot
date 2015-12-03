'use strict';

var BeerBot = require('beerbot');
var config = require('./config');

var bot = new BeerBot(config);
bot.on('connected', function() {
  bot.logger.info('Awesome Beerbot is started');
});

bot.on('error', function(err) {
  bot.logger.error('Error while starting Awesome Beerbot', err);
});

bot.start();
