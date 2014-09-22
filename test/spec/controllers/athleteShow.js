'use strict';

describe('Controller: AthleteShowCtrl', function () {

  beforeEach(module('athleteApp'));

  var AthleteShowCtrl,
    AthleteService,
    ActivityService,
    athleteDeferred,
    activitiesDeferred,
    scope,
    $q;

  beforeEach(inject(function ($controller, $rootScope, _$q_, _AthleteService_, _ActivityService_) {
    scope = $rootScope.$new();
    AthleteService = _AthleteService_;
    ActivityService = _ActivityService_;
    $q = _$q_;

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

  describe('startEditing', function() {
    it('sets editingAthlete to truthy', function() {
      delete scope.editingAthlete;
      scope.athlete = {};
      scope.startEditing();

      expect(scope.editingAthlete).toBeTruthy();
    });

    it('sets the newAthleteName to the current athlete name', function() {
      delete scope.newAthleteName;
      scope.athlete = {name: "Vincenzo Nibali"};
      scope.startEditing();

      expect(scope.newAthleteName).toEqual("Vincenzo Nibali");
    });
  });

  describe('finishEditing', function() {
    it('calls the athlete service and sets the athlete name', function() {
      scope.editingAthlete = true;
      scope.athlete = {id: 123, name: 'Vincenzo Nibali'};
      scope.newAthleteName = 'Vincent Nibali';

      var putDeferred = $q.defer();
      spyOn(AthleteService, 'put').andReturn(putDeferred.promise);

      scope.finishEditing();

      putDeferred.resolve();
      scope.$apply();

      expect(AthleteService.put).toHaveBeenCalledWith(123, {name: 'Vincent Nibali'});
      expect(scope.editingAthlete).toBeFalsy();
      expect(scope.athlete.name).toEqual('Vincent Nibali');
    });
  });
});
