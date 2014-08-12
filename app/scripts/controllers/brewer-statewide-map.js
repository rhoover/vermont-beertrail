'use strict';

/**
 * @ngdoc function
 * @name vtbtApp.controller:BrewerStatewideMapCtrl
 * @description
 * # BrewerStatewideMapCtrl
 * Controller of the vtbtApp
 */

angular.module('vtbtApp')
    .controller('BrewerStatewideMapCtrl', function ($scope, $location, analyticsGoogle, storageFactory) {

        $scope.brewers = storageFactory.getData('brewer-list-cache');

        analyticsGoogle.logPageLoad($scope, $location.absUrl(), $location.path());
});
