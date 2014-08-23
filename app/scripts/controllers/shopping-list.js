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
    .controller('ListShoppingCtrl', function ($scope, $routeParams, storageFactory, appDataFilter, shoppingFactory) {

        $scope.brewer = appDataFilter.brewer(storageFactory.getData('brewer-list-cache'), $routeParams.selector);

        shoppingFactory.yelpShoppingInfo($scope.brewer.latitude, $scope.brewer.longitude)
            .success(function (data) {
                $scope.shoppingList = appDataFilter.businessList(data.businesses);
            });

    });
