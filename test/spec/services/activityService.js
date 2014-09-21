'use strict';

describe('Service: ActivityService', function () {

  beforeEach(module('athleteApp'));

  var ActivityService,
    $httpBackend;

  beforeEach(inject(function (_$httpBackend_, _ActivityService_) {
    ActivityService = _ActivityService_;
    $httpBackend = _$httpBackend_;
  }));

  describe('getList', function() {
    it('sends a GET request to the server', function() {
      $httpBackend.expectGET(/activities\.json\?athlete_id\=123/).respond('hello!');
      ActivityService.getList({athlete_id: 123});
      $httpBackend.flush();
    });
  });
});
