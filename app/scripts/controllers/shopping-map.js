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
    .controller('ShoppingMapCtrl', function ($scope, $routeParams, $location, analyticsGoogle, storageFactory, appDataFilter) {

        var shoppingListData = storageFactory.getData($routeParams.selector + '-' + 'shopping-cache');
        var findTheBusiness = appDataFilter.business(shoppingListData.businesses, $routeParams.id);
        $scope.shopping = findTheBusiness;

        analyticsGoogle.logPageLoad($scope, $location.absUrl(), $location.path());
    });
