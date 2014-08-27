'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var RecipeSchema = new Schema({
  name: String,
  category: String,     // snack (appetizer), salad, soup etc.
  cousine: String,
  description: String,  //about recipe
  duration: Number,     // cooking time in minutes
  ingredients: [{ name: String, qtty: String, note: String }],
  instructions: String, // how to cook
  grant: String,        // who grant(give) recipe
  date:{ type: Date, default: Date.now }, // when recipe added to site
  notes: [String],      // additional notes about recipe
  images: [String],
  rating: Number,
  ratings: Number,
  viewed: Number
});

module.exports = mongoose.model('Recipe', RecipeSchema);