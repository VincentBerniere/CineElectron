'use strict';

describe('Controller: SimilarCtrl', function () {

  // load the controller's module
  beforeEach(module('coursExoApp'));

  var SimilarCtrl,
    scope, serviceAjax;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _serviceAjax_) {
    scope = $rootScope.$new();
    serviceAjax = _serviceAjax_;

    SimilarCtrl = $controller('SimilarCtrl', {
      $scope: scope,
      serviceAjax: serviceAjax
    });

  }));

  it('should set $scope.movies and $scope.total_pages when calling $scope.similarMovie', function () {
    spyOn(serviceAjax, 'similar').and.callFake(function () {
      return{
        success: function (callback) {
          callback({"results": [
            {}
          ], "total_pages": 10})
        }
      }
    });

    scope.similarMovie();

    expect(scope.totalPages).toEqual(10);
    expect(scope.movies).toEqual([
      {}
    ]);
  });

  it('should call similarMovie function when calling pageChanged function', function () {
    spyOn(scope, 'similarMovie');

    scope.pageChanged();

    expect(scope.similarMovie).toHaveBeenCalled();
  });

  it('should set $scope.orderByReverse and $scope.orderByPredicate when calling $scope.clickPredicateName function', function () {
    scope.orderByReverse = true;

    scope.clickPredicateName();

    expect(scope.orderByPredicate).toBe('title');
    expect(scope.orderByReverse).toBe(false);
  });

  it('should set $scope.orderByReverse and $scope.orderByPredicate when calling $scope.clickPredicateRate function', function () {
    scope.orderByReverse = true;

    scope.clickPredicateRate();

    expect(scope.orderByPredicate).toBe('vote_average');
    expect(scope.orderByReverse).toBe(false);
  });
});
