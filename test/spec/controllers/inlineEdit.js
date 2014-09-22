'use strict';

describe('Controller: InlineEditCtrl', function () {

  beforeEach(module('athleteApp'));

  var InlineEditCtrl,
    scope,
    $q,
    $httpBackend;

  beforeEach(inject(function ($controller, $rootScope, _$q_, $http, _$httpBackend_) {
    scope = $rootScope.$new();
    $q = _$q_;
    $httpBackend = _$httpBackend_;

    InlineEditCtrl = $controller('InlineEditCtrl', {
      $scope: scope,
      $http: $http
    });
  }));

  describe('startEditing', function() {
    it('sets editingObject to truthy', function() {
      delete scope.editingObject;
      scope.object = {};
      scope.startEditing();

      expect(scope.editingObject).toBeTruthy();
    });

    it('sets the newAthleteName to the current athlete name', function() {
      delete scope.newValue;
      scope.object = {name: 'Vincenzo Nibali'};
      scope.attribute = 'name';
      scope.startEditing();

      expect(scope.newValue).toEqual('Vincenzo Nibali');
    });
  });

  describe('finishEditing', function() {
    it('calls the athlete service and sets the athlete name', function() {
      scope.editingObject = true;
      scope.object = {id: 99, name: 'Vincenzo Nibali'};
      scope.newValue = 'Vincent Nibali';
      scope.attribute = 'name';
      scope.prefix = 'athlete';
      scope.endpoint = 'athletes';

      $httpBackend.expectPUT(/athletes\/99/, {athlete: {name: 'Vincent Nibali'}}).respond('hello!');

      scope.finishEditing();

      $httpBackend.flush();

      expect(scope.editingAthlete).toBeFalsy();
      expect(scope.object.name).toEqual('Vincent Nibali');
    });
  });
});
