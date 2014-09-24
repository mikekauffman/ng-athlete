(function () {
  'use strict';

  angular
    .module('athleteApp')
    .controller('AthleteShowCtrl', function ($http, $scope, $routeParams, AthleteService, ActivityService) {
      AthleteService.get($routeParams.athleteId).then(function (athleteResponse) {
        $scope.athlete = athleteResponse.data;
      });

      ActivityService.getList({athlete_id: $routeParams.athleteId}).then(function (activitiesResponse) {
        $scope.activities = activitiesResponse.data;
      });

      $scope.editAthleteName = function () {
        $scope.editingAthleteName = true;
      };

      $scope.finishEditing = function (athlete) {
        $http
          .put(
            'http://localhost:3000/athletes/' + $routeParams.athleteId, athlete
        ).then(function () {
            $scope.editingAthleteName = false;
          });
      };
    });
})();