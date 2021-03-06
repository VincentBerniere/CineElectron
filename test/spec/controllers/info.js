'use strict';

describe('Controller: InfoCtrl', function () {

    // load the controller's module
    beforeEach(module('coursExoApp'));

    var InfoCtrl,
        scope, serviceAjax;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope, _serviceAjax_) {
        scope = $rootScope.$new();
        serviceAjax = _serviceAjax_;
        InfoCtrl = $controller('InfoCtrl', {
            $scope: scope,
            serviceAjax: serviceAjax
        });
    }));

    it('should set $scope.movie when calling $scope.infoMovie', function () {
        spyOn(serviceAjax, 'info').and.callFake(function () {
            return{
                success: function (callback) {
                    callback({"title" : "test"})
                }
            }
        });

        scope.infoMovie();

        expect(scope.movie).toEqual({"title" : "test"});
    });

  it('should set $scope.similars when calling $scope.similarMovie', function () {
    spyOn(serviceAjax, 'similar').and.callFake(function () {
      return{
        success: function (callback) {
          callback({"results": [
            {}
          ]})
        }
      }
    });

    scope.similarMovie();
    expect(scope.similars).toEqual([
      {}
    ]);
  });

});
