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
    .controller('WeatherCtrl', function ($scope, $routeParams, $location, storageFactory, appDataFilter, roundingNumbers) {

        // $timeout(function () {

            var weatherData = storageFactory.getData($routeParams.selector + '-' + 'weather-cache');

            $scope.brewer = appDataFilter.brewer(storageFactory.getData('brewer-list-cache'), $routeParams.selector);
            $scope.weather = weatherData;
            $scope.temp = roundingNumbers.roundNumber(weatherData.currently.temperature);
            $scope.maxTemp = roundingNumbers.roundNumber(weatherData.daily.data[2].temperatureMax);

        // }, 3000);

        // analyticsGoogle.logPageLoad($scope, $location.absUrl(), $location.path());

    });
