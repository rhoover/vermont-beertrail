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

            this.brewer = findDataFilter.brewerFind(storageFactory.getData(brewerCacheKey), $routeParams.selector);
            this.weather = weatherData;

            this.temp = roundingNumbers.roundNumber(weatherData.currently.temperature);
            this.maxTemp = roundingNumbers.roundNumber(weatherData.daily.data[2].temperatureMax);


    });
