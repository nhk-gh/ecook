'use strict';

angular.module('ecookingApp')
  .controller('RecipesCtrl', function ($scope, recipes) {
    $scope.recipes = [];

    recipes.getRecipes()
      .then(function(recipes) {
        $scope.recipes = recipes;
        $scope.recipes.forEach(function(itm){
          itm.rating = itm.rating.toFixed(1);
        });
      },
      function(status){

      });
  });
