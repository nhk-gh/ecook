'use strict';

angular.module('ecookingApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/recipes', {
        templateUrl: 'app/recipes/recipes.html',
        controller: 'RecipesCtrl'
      })
      .when('/recipes/:search', {
        templateUrl: 'app/recipes/recipes.html',
        controller: 'RecipesCtrl'
      });
  });