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
    .controller('BrewerMapCtrl', function ($scope, $routeParams, storageFactory, appDataFilter) {

        $scope.brewer = appDataFilter.brewer(storageFactory.getData('brewer-list-cache'), $routeParams.selector);

    });
