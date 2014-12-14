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
    .controller('ListBrewerCtrl', function ($scope, storageFactory, brewerCacheKey) {

        // $scope.brewerList = sortDataFilter.brewerSort(storageFactory.getData(brewerCacheKey));
        $scope.brewerList = storageFactory.getData(brewerCacheKey);

    });
