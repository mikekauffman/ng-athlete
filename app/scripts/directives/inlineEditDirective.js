(function () {
  'use strict';

  angular
    .module('athleteApp')
    .directive('inlineEdit', function () {
      return {
        restrict: 'E',
//        this is saying we want this directive to be an element (html). 2 other types this could be is an attribute, or class.
        templateUrl: 'views/inlineEdit/editor.html',
        scope: {
          object: '=',
          attribute: '@',
          endpoint: '@'
        },
        controller: 'InlineEditCtrl'
      };
    });
})();