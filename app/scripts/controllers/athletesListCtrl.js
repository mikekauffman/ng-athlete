// we are defining a function and then calling it right away
(function () {
  'use strict';
//  any code in this function is read by browser in strict mode
  angular
    //  start writing controller and specifying module (found in app.js)
    .module('athleteApp')
    .controller('AthletesListCtrl', function ($scope, AthletesService) {
//      $scope is a variable accessible anywhere in controller (similar to passing instance variables to view in rails)
      AthletesService.getList().then(function (athletes) {
        $scope.athletes = athletes;
      });
//      this returns a 'promise' (that now lives in athservice). lets you write js code without callbacks using .then blocks
    });
})();