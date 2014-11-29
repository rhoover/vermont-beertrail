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
    .controller('BrewerDetailCtrl', function ($scope, $routeParams, storageFactory, findDataFilter) {

        $scope.brewer = findDataFilter.brewerFind(storageFactory.getData('brewer-list-cache'), $routeParams.selector);

    });
