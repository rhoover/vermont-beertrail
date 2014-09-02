'use strict';

/**
 * @ngdoc service
 * @name vtbtApp.getbrewers
 * @description
 * # getbrewers
 * Factory in the vtbtApp.
 */

angular
    .module('vtbtApp')
    .factory('brewerFactory', function ($http) {

        return {
            getBrewerData: function () {
                return $http.get('data/vtbrewers.json')
                    .then(function (result) {
                        return result.data;
                    });
            }
        }; //end return
    });
