(function() {
    'use strict';

    angular
        .module('athleteApp')
        .controller('AthletesListCtrl', function($scope, AthleteService) {
            AthleteService.getList().then(function(athletesResponse) {
                $scope.athletes = athletesResponse;
            });
        });
})();