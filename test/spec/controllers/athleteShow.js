'use strict';

describe('Controller: AthleteShowCtrl', function () {

  beforeEach(module('athleteApp'));

  var AthleteShowCtrl,
    AthleteService,
    ActivityService,
    athleteDeferred,
    activitiesDeferred,
    scope;

  beforeEach(inject(function ($controller, $rootScope, $q, _AthleteService_, _ActivityService_) {
    scope = $rootScope.$new();
    AthleteService = _AthleteService_;
    ActivityService = _ActivityService_;

    athleteDeferred = $q.defer();
    spyOn(AthleteService, 'get').andReturn(athleteDeferred.promise);

    activitiesDeferred = $q.defer();
    spyOn(ActivityService, 'getList').andReturn(activitiesDeferred.promise);

    AthleteShowCtrl = $controller('AthleteShowCtrl', {
      $scope: scope,
      AthleteService: AthleteService,
      ActivityService: ActivityService,
      $routeParams: {
        athleteId: '99'
      }
    });
  }));

  it('gets the athletes from the service and puts them on scope', function () {
    athleteDeferred.resolve({data: {
      name: 'Vincenzo Nibali',
      weight: 155
    }});
    scope.$apply();

    expect(AthleteService.get).toHaveBeenCalledWith('99');
    expect(scope.athlete).toEqual({
      name: 'Vincenzo Nibali',
      weight: 155
    });
  });

  it('gets the activites for the athlete and puts them on scope', function () {
    activitiesDeferred.resolve({data: [
      {
        athlete_id: 99,
        miles: 100
      }
    ]});
    scope.$apply();

    expect(ActivityService.getList).toHaveBeenCalledWith({athlete_id: '99'});
    expect(scope.activities).toEqual([
      {
        athlete_id: 99,
        miles: 100
      }
    ]);
  });
});
