'use strict';

angular.module('ecookingApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    }];

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };

    $scope.searchCriteria = '';

    $scope.search = function(){
      //console.log($scope.searchCriteria);
      $location.path('/recipes/' + $scope.searchCriteria);
      /*
      recipes.getRecipes(searchCriteria)
       .then(function(recipes) {


          $scope.recipes = recipes;
          $scope.recipes.forEach(function(itm){
            itm.rating = itm.rating.toFixed(1);
          });

        },
        function(status){

        });*/
    };
  });