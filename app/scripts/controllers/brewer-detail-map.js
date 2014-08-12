'use strict';

/**
 * @ngdoc function
 * @name vtbtApp.controller:BrewerMapCtrl
 * @description
 * # BrewerMapCtrl
 * Controller of the vtbtApp
 */

angular
    .module('vtbtApp')
    .controller('BrewerMapCtrl', function ($scope, $routeParams, $location, analyticsGoogle, storageFactory, appDataFilter) {

        $scope.brewer = appDataFilter.brewer(storageFactory.getData('brewer-list-cache'), $routeParams.selector);

        analyticsGoogle.logPageLoad($scope, $location.absUrl(), $location.path());
    });
