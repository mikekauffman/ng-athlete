'use strict';

describe('Service: AthleteService', function () {

  // load the controller's module
  beforeEach(module('athleteApp'));

  var AthleteService,
    $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, _AthleteService_) {
    AthleteService = _AthleteService_;
    $httpBackend = _$httpBackend_;
  }));

  describe('getList', function () {
    it('sends a GET request to the server', function () {
      $httpBackend.expectGET(/athletes\.json/).respond('hello!');
      AthleteService.getList();
      $httpBackend.flush();
    });
  });

  describe('get', function() {
    it('GETs an athlete', function() {
      $httpBackend.expectGET(/athletes\/99\.json/).respond('hello!');
      AthleteService.get(99);
      $httpBackend.flush();
    })
  });

  describe('put', function() {
    it('PUTs data to an athlete', function() {
      $httpBackend.expectPUT(/athletes\/99/, {athlete: {name: 'Vincent Nibali'}}).respond('hello!');
      AthleteService.put(99, {name: 'Vincent Nibali'});
      $httpBackend.flush();
    })
  });
});
