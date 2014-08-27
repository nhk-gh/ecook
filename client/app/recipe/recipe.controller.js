'use strict';

angular.module('ecookingApp')
  .controller('RecipeCtrl', function ($scope, $routeParams, recipe) {
    $scope.recipe = {};

    recipe.getRecipe($routeParams.id)
      .then(function(recipe) {
        $scope.recipe = recipe;
      },
      function(status){

      });
  });
