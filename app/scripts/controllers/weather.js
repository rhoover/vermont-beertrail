'use strict';

/**
 * @ngdoc function
 * @name vtbtApp.controller:WeatherCtrl
 * @description
 * # WeatherCtrl
 * Controller of the vtbtApp
 */

angular
    .module('vtbtApp')
    .controller('WeatherCtrl', function ($scope, $routeParams, storageFactory, appDataFilter, roundingNumbers, BREWERCACHEKEY, WEATHERCACHEKEY) {

            var weatherData = storageFactory.getData($routeParams.selector + '-' + WEATHERCACHEKEY);

            $scope.brewer = appDataFilter.brewer(storageFactory.getData(BREWERCACHEKEY), $routeParams.selector);
            $scope.weather = weatherData;

            $scope.temp = roundingNumbers.roundNumber(weatherData.currently.temperature);
            $scope.maxTemp = roundingNumbers.roundNumber(weatherData.daily.data[2].temperatureMax);


    });
