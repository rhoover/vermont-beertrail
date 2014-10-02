'use strict';

/**
 * @ngdoc function
 * @name vtbtApp.controller:ListbrewerCtrl
 * @description
 * # ListbrewerCtrl
 * Controller of the vtbtApp
 */

angular
    .module('vtbtApp')
    .controller('ListBrewerCtrl', function ($scope, storageFactory, appDataFilter, brewerCacheKey) {

        $scope.brewerList = appDataFilter.brewerList(storageFactory.getData(brewerCacheKey));

    });
