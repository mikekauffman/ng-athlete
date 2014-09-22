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

      function put(athleteId, params) {
        return $http.put('http://localhost:3000/athletes/' + athleteId, {athlete: params});
      }

      return {
        getList: getList,
        get: get,
        put: put
      };
    });
})();