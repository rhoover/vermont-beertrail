'use strict';

/**
 * @ngdoc function
 * @name vtbtApp.controller:ListDiningCtrl
 * @description
 * # ListDiningCtrl
 * Controller of the vtbtApp
 */

angular
    .module('vtbtApp')
    .controller('ListDiningCtrl', function ($scope, $routeParams, $location, storageFactory, appDataFilter, diningFactory) {

        $scope.brewer = appDataFilter.brewer(storageFactory.getData('brewer-list-cache'), $routeParams.selector);

        diningFactory.yelpDiningInfo($scope.brewer.latitude, $scope.brewer.longitude)
            .success(function (data) {
                $scope.diningList = data.businesses;
                // storageFactory.storeData($routeParams.selector + '-' + 'dining-cache', data);
            });

        // analyticsGoogle.logPageLoad($scope, $location.absUrl(), $location.path());
    });
