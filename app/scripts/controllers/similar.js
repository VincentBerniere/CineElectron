'use strict';

/**
 * @ngdoc function
 * @name coursExoApp.controller:SimilarCtrl
 * @description
 * # SimilarCtrl
 * Controller of the coursExoApp
 */
angular.module('coursExoApp')
  .controller('SimilarCtrl', function ($scope, $routeParams, serviceAjax) {
    var id = $routeParams.id;
    $scope.currentPage = 1;
    $scope.totalPages = 0;
    $scope.loading = true;
    $scope.orderByPredicate = "title";
    $scope.orderByReverse = false;

    $scope.similarMovie = function(){
      $scope.loading = true;

      serviceAjax.similar(id, $scope.currentPage).success(function(data){
        $scope.loading = false;
        $scope.movies = data.results;
        $scope.totalPages = data.total_pages;
      })
    };

    $scope.pageChanged = function(){
      $scope.similarMovie();
    };

    $scope.clickPredicateName = function(){
      $scope.orderByReverse = !$scope.orderByReverse;
      $scope.orderByPredicate = 'title';
    }

    $scope.clickPredicateRate = function(){
      $scope.orderByReverse = !$scope.orderByReverse;
      $scope.orderByPredicate = 'vote_average';
    }

    $scope.similarMovie();
  });
