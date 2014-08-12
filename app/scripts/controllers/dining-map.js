'use strict';

/**
 * @ngdoc function
 * @name vtbtApp.controller:DiningMapCtrl
 * @description
 * # DiningMapCtrl
 * Controller of the vtbtApp
 */
angular.module('vtbtApp')
    .controller('DiningMapCtrl', function ($scope, $routeParams, storageFactory, appDataFilter) {
        var diningListData = storageFactory.getData($routeParams.selector + '-' + 'dining-cache');
        var findTheBusiness = appDataFilter.business(diningListData.businesses, $routeParams.id);
        $scope.dining = findTheBusiness;
    });
