(function() {
    'use strict';

    angular
        .module('athleteApp')
        .factory('AthleteService', function($http) {
           function getList() {
               return $http.get('http://localhost:3000/athletes.json');
           }

           return {
               getList: getList
           };
        });
})();