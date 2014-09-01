'use strict';

angular.module('ecookingApp')
  .controller('RecipeCtrl', function ($scope, $routeParams, recipe) {
    $scope.recipe = {};
    $scope.ingredients = [];

    recipe.getRecipe($routeParams.id)
      .then(function(recipe) {
        $scope.recipe = recipe;
        $scope.arrangeIngredients();
      },
      function(status){

      });

    $scope.arrangeIngredients = function(){
      var middle = Math.ceil($scope.recipe.ingredients.length / 2);
      var mod = $scope.recipe.ingredients.length % 2;
      console.log(mod)
      for (var i=0; i<middle; i++){
        $scope.ingredients.push($scope.recipe.ingredients[i]);

        if ((i < middle-1) && (mod !== 0)){
          $scope.ingredients.push($scope.recipe.ingredients[i+middle]);
        }
      }

      console.log($scope.ingredients)
    };
  });
