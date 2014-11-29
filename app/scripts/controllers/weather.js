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
    .controller('WeatherCtrl', function ($scope, $routeParams, storageFactory,  findDataFilter, roundingNumbers, brewerCacheKey, weatherCacheKey) {

            var weatherData = storageFactory.getData($routeParams.selector + '-' + weatherCacheKey);

            $scope.brewer = findDataFilter.brewerFind(storageFactory.getData(brewerCacheKey), $routeParams.selector);
            $scope.weather = weatherData;

            $scope.temp = roundingNumbers.roundNumber(weatherData.currently.temperature);
            $scope.maxTemp = roundingNumbers.roundNumber(weatherData.daily.data[2].temperatureMax);


    });
