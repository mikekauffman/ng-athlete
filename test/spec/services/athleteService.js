'use strict';

describe('AthletesService', function() {
  beforeEach(module('athleteApp'));

  var AthletesService,
    $httpBackend;

  beforeEach(inject(function(_AthletesService_, _$httpBackend_) {
    AthletesService = _AthletesService_;
    $httpBackend = _$httpBackend_;
  }));

  describe('getList', function() {
    it('gets athletes from the server', function() {
      $httpBackend.expectGET(/athletes\.json/).respond([{name: 'Jose'}]);

      AthletesService.getList();

      $httpBackend.flush();
    })
  })
});