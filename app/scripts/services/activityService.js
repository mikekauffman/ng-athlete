(function () {
  'use strict';

  angular
    .module('athleteApp')
    .factory('ActivityService', function ($http) {
      function getList(params) {
        return $http({
          method: 'get',
          url: 'http://localhost:3000/activities.json',
          params: params
        });
      }

      return {
        getList: getList
      };
    });
})();