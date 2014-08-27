/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /things              ->  index
 * POST    /things              ->  create
 * GET     /things/:id          ->  show
 * PUT     /things/:id          ->  update
 * DELETE  /things/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var Recipe = require('./recipe.model');
var mongoose = require('mongoose');

// Get list of features
exports.index = function(req, res) {
  Recipe.find({}, function (err, rcps) {
    if(err) { return handleError(res, err); }
    return res.json(200, rcps);
  });
};

// Get a single feature
exports.show = function(req, res) {
  var idd = mongoose.Types.ObjectId (req.params.id);

  Recipe.findById(idd, function (err, rcp) {
    if(err) { return handleError(res, err); }
    if(!rcp) { return res.send(404); }
    return res.json(rcp);
  });
};

// Creates a new feature in the DB.
exports.create = function(req, res) {
  Recipe.create(req.body, function(err, thing) {
    if(err) { return handleError(res, err); }
    return res.json(201, thing);
  });
};

// Updates an existing feature in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Recipe.findById(req.params.id, function (err, thing) {
    if (err) { return handleError(res, err); }
    if(!thing) { return res.send(404); }
    var updated = _.merge(thing, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, thing);
    });
  });
};

// Deletes a feature from the DB.
exports.destroy = function(req, res) {
  Recipe.findById(req.params.id, function (err, thing) {
    if(err) { return handleError(res, err); }
    if(!thing) { return res.send(404); }
    thing.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}