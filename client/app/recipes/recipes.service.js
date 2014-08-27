'use strict';

angular.module('ecookingApp')
  .factory('recipes', function ($q, $http, $log) {
    return {
      getRecipes: function(){
        var deferred = $q.defer();

        $http({method:'GET', url:'api/recipe', cache: false})
          .success(function(data){
            deferred.resolve(data);
          })
          .error(function(data, status){
            $log.error('Get Recipes: ' + status);
            deferred.reject(status);
          });

        return deferred.promise;
      }
    }
  });

