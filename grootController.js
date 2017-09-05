'use strict';

exports.speak = function(req, res) {
  console.log(req.query);
  res.json("I am Groot " + req.query.sentence);
};