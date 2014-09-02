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
            // getBrewerData: function () {

            //     var serviceUrl = 'data/vtbrewers.json';
            //     var brewerData = [];

            //     return $http.get(serviceUrl, {cache:false})
            //         .success(function (data) {
            //             brewerData = data;
            //             return brewerData;
            //         })
            //         .error(function () {
            //             /* jshint validthis: true */
            //             alert('Looks like someone mis-poured a beer, and now we are all paying the price.');
            //             /* jshint validthis: true */
            //         });

            // }
            getBrewerData: function () {
                var serviceUrl = 'data/vtbrewers.json';
                return $http.get(serviceUrl)
                    .then(function (result) {
                        return result.data;
                    });
            }
        }; //end return
    });
