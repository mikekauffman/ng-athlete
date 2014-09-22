(function() {
  'use strict';

  angular
    .module('athleteApp')
    .controller('AthleteShowCtrl', function($scope, $routeParams, AthleteService, ActivityService) {
      AthleteService.get($routeParams.athleteId).then(function(athleteResponse) {
        $scope.athlete = athleteResponse.data;
      });

      ActivityService.getList({athlete_id: $routeParams.athleteId}).then(function(activitiesResponse) {
        $scope.activities = activitiesResponse.data;
      });

      $scope.startEditing = function() {
        $scope.editingAthlete = true;
        $scope.newAthleteName = $scope.athlete.name;
      };

      $scope.finishEditing = function() {
        AthleteService.put($scope.athlete.id, {name: $scope.newAthleteName}).then(function() {
          $scope.editingAthlete = false;
          $scope.athlete.name = $scope.newAthleteName;
        });
      };
    });
})();