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
    .controller('ListBrewerCtrl', function ($scope, $location, analyticsGoogle, storageFactory) {

        $scope.brewerList = storageFactory.getData('brewer-list-cache');

        analyticsGoogle.logPageLoad($scope, $location.absUrl(), $location.path());
    });
