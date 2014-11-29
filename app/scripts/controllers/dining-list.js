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
    .controller('ListDiningCtrl', function ($scope, $routeParams, storageFactory, sortDataFilter, findDataFilter) {

        $scope.diningList = sortDataFilter.businessSort(storageFactory.getData($routeParams.selector + '-' + 'dining-cache').businesses);
        $scope.brewer = findDataFilter.brewerFind(storageFactory.getData('brewer-list-cache'), $routeParams.selector);

    });
