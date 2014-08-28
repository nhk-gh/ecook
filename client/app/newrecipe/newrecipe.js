'use strict';

angular.module('ecookingApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/newrecipe', {
        templateUrl: 'app/newrecipe/newrecipe.html',
        controller: 'NewRecipeCtrl'
      });
  });