'use strict';

angular.module('ecookingApp')
  .controller('RecipesCtrl', function ($scope, recipes) {
    $scope.recipes = [];

    recipes.getRecipes()
      .then(function(recipes) {
        $scope.recipes = recipes;
      },
      function(status){

      });
  });
