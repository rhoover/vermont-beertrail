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
    .controller('ListDiningCtrl', function ($scope, $routeParams, storageFactory, appDataFilter) {

        $scope.diningList = appDataFilter.businessList(storageFactory.getData($routeParams.selector + '-' + 'dining-cache').businesses);
        $scope.brewer = appDataFilter.brewer(storageFactory.getData('brewer-list-cache'), $routeParams.selector);

    });
