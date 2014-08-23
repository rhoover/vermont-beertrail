'use strict';

/**
 * @ngdoc function
 * @name vtbtApp.controller:BrewerDetailCtrl
 * @description
 * # BrewerDetailCtrl
 * Controller of the vtbtApp
 */

angular
    .module('vtbtApp')
    .controller('BrewerDetailCtrl', function ($scope, $routeParams, $location, storageFactory, appDataFilter) {

        $scope.brewer = appDataFilter.brewer(storageFactory.getData('brewer-list-cache'), $routeParams.selector);

    });
