'use strict';

angular.module('ecookingApp')
  .factory('recipe', function ($q, $http, $log) {
    return {
      getRecipe: function(id){
        var deferred = $q.defer();

        $http({method:'GET', url:'api/recipe/'+id.toString(), cache: false})
          .success(function(data){
            deferred.resolve(data);
          })
          .error(function(data, status){
            $log.error('Get Recipe: ' + status);
            deferred.reject(status);
          });

        return deferred.promise;
      }
    }
  });
