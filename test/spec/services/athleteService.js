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

    describe('getList', function() {
       it('sends a GET request to the server', function() {
           $httpBackend.expectGET(/athletes\.json/).respond('hello!');
           AthleteService.getList();
           $httpBackend.flush();
       });
    });
});
