(function () {
  'use strict';

  angular
    .module('athleteApp')
    .controller('AthleteShowCtrl', function ($scope, $routeParams, AthleteService, ActivityService) {
      AthleteService.get($routeParams.athleteId).then(function (athleteResponse) {
        $scope.athlete = athleteResponse.data;
      });

      ActivityService.getList({athlete_id: $routeParams.athleteId}).then(function (activitiesResponse) {
        $scope.activities = activitiesResponse.data;
      });
    });
})();