'use strict';

angular
  .module('athleteApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/athletes/list.html',
        controller: 'AthletesListCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
