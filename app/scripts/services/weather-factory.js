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

                var weatherUrl = 'https://api.forecast.io/forecast/' + weatherKey + '/' + lat + ',' + lon + '?callback=JSON_CALLBACK';

                return $http.jsonp(weatherUrl, {cache:false})
                    .success(function (data) {
                        return data;
                    });

            }
        };

    });
