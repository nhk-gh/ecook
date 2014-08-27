'use strict';

angular.module('ecookingApp')
  .controller('MainCtrl', function ($scope, main) {
    $scope.features = [];

    main.getFeatures()
      .then(function(fts) {
        $scope.features = fts;
      },
      function(status){

      });
  });