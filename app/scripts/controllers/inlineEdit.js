(function () {
  'use strict';

  angular
    .module('athleteApp')
    .controller('InlineEditCtrl', function ($scope, $http) {

      $scope.startEditing = function () {
        $scope.editingObject = true;
        $scope.newValue = $scope.object[$scope.attribute];
      };

      $scope.finishEditing = function () {
        var params = {};
        params[$scope.attribute] = $scope.newValue;

        $http.put('http://localhost:3000/' + $scope.endpoint + '/' + $scope.object.id, params)
          .then(function () {
            $scope.editingObject = false;
            $scope.object[$scope.attribute] = $scope.newValue
          });
      };
    });
})();