'use strict';

describe('Controller: AthletesListCtrl', function () {

  // load the controller's module
  beforeEach(module('athleteApp'));

  var AthletesListCtrl,
    scope,
    $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
    scope = $rootScope.$new();
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET(/athletes\.json/).respond([{name: 'Jose'}]);

    AthletesListCtrl = $controller('AthletesListCtrl', {
      $scope: scope
    });
  }));

  it('gets athletes from the rails server and puts them on scope', function () {
    $httpBackend.flush();
    expect(scope.athletes).toEqual([{name: 'Jose'}]);
  });
});