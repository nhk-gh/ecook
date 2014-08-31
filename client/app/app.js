'use strict';

angular.module('ecookingApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.bootstrap'
])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);
  })
  .constant('LIMITS', {
    MAX_RATING:      5,
    MIN_RATING:      1,
    DESCRIPTION_LEN: 300,
    NOTE_LEN:        500,
    INSTRUCTION_LEN: 1000
  });