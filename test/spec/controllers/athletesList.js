'use strict';

describe('Controller: AthletesListCtrl', function () {

    // load the controller's module
    beforeEach(module('athleteApp'));

    var AthletesListCtrl,
        AthleteService,
        $q,
        athletesDeferred,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope, $q, _AthleteService_) {
        scope = $rootScope.$new();
        AthleteService = _AthleteService_;

        athletesDeferred = $q.defer();
        spyOn(AthleteService, 'getList').andReturn(athletesDeferred.promise);

        AthletesListCtrl = $controller('AthletesListCtrl', {
            $scope: scope,
            AthleteService: AthleteService
        });
    }));

    it('gets the athletes from the service and puts them on scope', function () {
        athletesDeferred.resolve({data: [{
            name: 'Vincenzo Nibali',
            weight: 155
        }]});
        scope.$apply();

        expect(scope.athletes).toEqual([{
            name: 'Vincenzo Nibali',
            weight: 155
        }]);
    });
});
