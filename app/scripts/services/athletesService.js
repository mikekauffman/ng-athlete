(function() {
  'use strict';

  angular
    .module('athleteApp')
    .factory('AthletesService', function($http) {
      return {
        getList: function() {
          return $http.get('http://localhost:3000/athletes.json')
            .then(function(response) {
              return response.data;
            })
        }
      }
    });
})();