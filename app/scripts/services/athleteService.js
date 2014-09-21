(function () {
  'use strict';

  angular
    .module('athleteApp')
    .factory('AthleteService', function ($http) {
      function getList() {
        return $http.get('http://localhost:3000/athletes.json');
      }

      function get(athleteId) {
        return $http.get('http://localhost:3000/athletes/' + athleteId + '.json');
      }

      return {
        getList: getList,
        get: get
      };
    });
})();