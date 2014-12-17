'use strict';

/**
 * @ngdoc function
 * @name vtbtApp.controller:BrewerDetailCtrl
 * @description
 * # BrewerDetailCtrl
 * Controller of the vtbtApp
 */

angular
    .module('vtbtApp')
    .controller('BrewerDetailCtrl', function ($scope, $routeParams, storageFactory, findDataFilter, brewerCacheKey) {

        this.brewer = findDataFilter.brewerFind(storageFactory.getData(brewerCacheKey), $routeParams.selector);
        $scope.brewer = this.brewer; //because a directive needs scope information

    });
