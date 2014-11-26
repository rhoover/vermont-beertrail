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
    .controller('WeatherCtrl', function ($scope, $routeParams, storageFactory, appDataFilter, roundingNumbers, brewerCacheKey, weatherCacheKey) {

            var weatherData = storageFactory.getData($routeParams.selector + '-' + weatherCacheKey);

            $scope.brewer = appDataFilter.brewer(storageFactory.getData(brewerCacheKey), $routeParams.selector);
            $scope.weather = weatherData;

            $scope.temp = roundingNumbers.roundNumber(weatherData.currently.temperature);
            $scope.maxTemp = roundingNumbers.roundNumber(weatherData.daily.data[2].temperatureMax);


    });
