'use strict';

/**
 * @ngdoc service
 * @name coursExoApp.serviceAjax
 * @description
 * # serviceAjax
 * Factory in the coursExoApp.
 */
angular.module('coursExoApp')
  .factory('serviceAjax', function ($http) {
    return{
        search: function(query, page){
            return $http.get("http://localhost:3001/search?q=" + query + "&page=" + page);
        },
        info: function(id){
            return $http.get("http://localhost:3001/info/" + id);
        },
        popular: function(page){
            return $http.get("http://localhost:3001/popular?page=" + page);
        },
        similar: function (id, page) {
          return $http.get("http://localhost:3001/similar/" + id + "?page=" + page);
        }
    }
  });
