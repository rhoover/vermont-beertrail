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
    .controller('ListBrewerCtrl', function ($scope, storageFactory, appDataFilter, BREWERCACHEKEY) {

        $scope.brewerList = appDataFilter.brewerList(storageFactory.getData(BREWERCACHEKEY));

    });
