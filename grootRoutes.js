'use strict';
module.exports = function(app) {
  var groot = require('./grootController');

  app.route('/grootSpeak')
    .get(groot.speak)
};