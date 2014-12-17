'use strict';

/**
 * @ngdoc function
 * @name vtbtApp.controller:ShoppingMapCtrl
 * @description
 * # ShoppingMapCtrl
 * Controller of the vtbtApp
 */

angular
    .module('vtbtApp')
    .controller('ShoppingMapCtrl', function ($scope, $routeParams, $location, storageFactory, findDataFilter, shoppingCacheKey) {

        // var shoppingListData = storageFactory.getData($routeParams.selector + '-' + shoppingCacheKey);
        // var findTheBusiness = findDataFilter.businessFind(shoppingListData.businesses, $routeParams.id);
        var findTheBusiness = findDataFilter.businessFind(storageFactory.getData($routeParams.selector + '-' + shoppingCacheKey).businesses, $routeParams.id);

        // $scope.shopping = findTheBusiness;
        this.shopping = findTheBusiness;
        $scope.shopping = this.shopping;

    });
