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
    .controller('ListShoppingCtrl', function ($scope, $routeParams, storageFactory, appDataFilter) {

        $scope.shoppingList = appDataFilter.businessList(storageFactory.getData($routeParams.selector + '-' + 'shopping-cache').businesses);
        $scope.brewer = appDataFilter.brewer(storageFactory.getData('brewer-list-cache'), $routeParams.selector);
    });
