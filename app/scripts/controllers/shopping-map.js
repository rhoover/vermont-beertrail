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
    .controller('ShoppingMapCtrl', function ($scope, $routeParams, $location, storageFactory, findDataFilter) {

        var shoppingListData = storageFactory.getData($routeParams.selector + '-' + 'shopping-cache');
        var findTheBusiness = findDataFilter.businessFind(shoppingListData.businesses, $routeParams.id);

        $scope.shopping = findTheBusiness;

    });
