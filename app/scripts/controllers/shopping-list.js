'use strict';

/**
 * @ngdoc function
 * @name vtbtApp.controller:ListshoppingCtrl
 * @description
 * # ListshoppingCtrl
 * Controller of the vtbtApp
 */

angular
    .module('vtbtApp')
    .controller('ListShoppingCtrl', function ($scope, $routeParams, storageFactory,  sortDataFilter, findDataFilter) {

        $scope.shoppingList = sortDataFilter.businessSort(storageFactory.getData($routeParams.selector + '-' + 'shopping-cache').businesses);
        $scope.brewer = findDataFilter.brewerFind(storageFactory.getData('brewer-list-cache'), $routeParams.selector);
    });
