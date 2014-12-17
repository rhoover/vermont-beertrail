'use strict';

/**
 * @ngdoc function
 * @name vtbtApp.controller:BrewerMapCtrl
 * @description
 * # BrewerMapCtrl
 * Controller of the vtbtApp
 */

angular
    .module('vtbtApp')
    .controller('BrewerMapCtrl', function ($scope, $routeParams, $window, storageFactory, findDataFilter, brewerCacheKey) {

        // $scope.brewer = findDataFilter.brewerFind(storageFactory.getData('brewer-list-cache'), $routeParams.selector);
        this.brewer = findDataFilter.brewerFind(storageFactory.getData(brewerCacheKey), $routeParams.selector);

        //I wish this weren't here, but for the life of me, could not get this to work from a factory :(.
        $window.navigator.geolocation.watchPosition(function (position) {

            $scope.$apply(function () {
                $scope.lati = position.coords.latitude;
                $scope.loni = position.coords.longitude;
            });

        });

    });
