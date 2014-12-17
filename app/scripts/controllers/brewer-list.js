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
    .controller('ListBrewerCtrl', function (storageFactory, brewerCacheKey) {

        // $scope.brewerList = sortDataFilter.brewerSort(storageFactory.getData(brewerCacheKey));
        // $scope.brewerList = storageFactory.getData(brewerCacheKey);
        this.brewerList = storageFactory.getData(brewerCacheKey);

    });
