'use strict';

angular.module('ecookingApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/recipe/:id', {
        templateUrl: 'app/recipe/recipe.html',
        controller: 'RecipeCtrl'
      });
  });