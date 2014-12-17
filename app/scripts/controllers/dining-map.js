'use strict';

/**
 * @ngdoc function
 * @name vtbtApp.controller:DiningMapCtrl
 * @description
 * # DiningMapCtrl
 * Controller of the vtbtApp
 */

angular
    .module('vtbtApp')
    .controller('DiningMapCtrl', function ($scope, $routeParams, storageFactory, findDataFilter, diningCacheKey) {

        // var diningListData = storageFactory.getData($routeParams.selector + '-' + diningCacheKey);
        // var findTheBusiness = findDataFilter.businessFind(diningListData.businesses, $routeParams.id);
        var findTheBusiness = findDataFilter.businessFind(storageFactory.getData($routeParams.selector + '-' + diningCacheKey).businesses, $routeParams.id);

        // $scope.dining = findTheBusiness;
        this.dining = findTheBusiness;
        $scope.dining = this.dining;
    });
