(function() {
  'use strict';

  angular
    .module('athleteApp')
    .directive('inlineEdit', function() {
      return {
        restrict: 'E',
        templateUrl: 'views/inlineEdit/editor.html',
        scope: {
          object: '=',
          attribute: '@',
          endpoint: '@',
          prefix: '@'
        },
        controller: 'InlineEditCtrl'
      }
    });
})();