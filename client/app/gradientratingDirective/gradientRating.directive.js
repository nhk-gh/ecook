'use strict';

angular.module('ecookingApp')
  .directive('gradientRating', function (LIMITS) {
    return {
      templateUrl: 'app/gradientratingDirective/gradientRating.html',
      restrict: 'E',

      scope: {
        overall:'=',
        ratings: '=',
        viewed: '='
      },

      link: function (scope, element, attrs) {
        //console.log(scope)
      }
    };
  });