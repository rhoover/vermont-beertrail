'use strict';

/**
 * @ngdoc function
 * @name vtbtApp.controller:BrewerStatewideMapCtrl
 * @description
 * # BrewerStatewideMapCtrl
 * Controller of the vtbtApp
 */

angular.module('vtbtApp')
    .controller('BrewerStatewideMapCtrl', function ($scope, storageFactory) {

        $scope.brewers = storageFactory.getData('brewer-list-cache');

});
