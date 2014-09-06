'use strict';

/**
 * @ngdoc service
 * @name vtbtApp.weatherFactory
 * @description
 * # weatherFactory
 * Factory in the vtbtApp.
 */

angular
    .module('vtbtApp')
    .factory('weatherFactory', function ($http, weatherKey) {

        return {
            weatherReturnedInfo: function (lat, lon) {
                return $http.jsonp('https://api.forecast.io/forecast/' + weatherKey + '/' + lat + ',' + lon + '?callback=JSON_CALLBACK')
                    .then(function (result) {
                        return result.data;
                    });
            }
        }; //end return

    });
