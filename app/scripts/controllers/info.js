'use strict';

/**
 * @ngdoc function
 * @name coursExoApp.controller:InfoCtrl
 * @description
 * # InfoCtrl
 * Controller of the coursExoApp
 */
angular.module('coursExoApp')
  .controller('InfoCtrl', function ($scope, $routeParams, serviceAjax) {
    var id = $routeParams.id;
    $scope.loading = true;

    $scope.infoMovie = function(){
      serviceAjax.info(id).success(function(data){
        $scope.loading = false;
        $scope.movie = data;

        $scope.similarMovie();
      });
    }

    $scope.similarMovie = function(){
      $scope.loading = true;

      serviceAjax.similar(id, 1).success(function(data){
        $scope.loading = false;
        $scope.similars = data.results;
      })
    };

    $scope.infoMovie();
  });
