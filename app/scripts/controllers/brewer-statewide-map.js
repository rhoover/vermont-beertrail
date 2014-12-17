'use strict';

/**
 * @ngdoc function
 * @name vtbtApp.controller:BrewerStatewideMapCtrl
 * @description
 * # BrewerStatewideMapCtrl
 * Controller of the vtbtApp
 */

angular.module('vtbtApp')
    .controller('BrewerStatewideMapCtrl', function ($scope, storageFactory, brewerCacheKey) {

        // $scope.brewers = storageFactory.getData(brewerCacheKey);
        this.brewers = storageFactory.getData(brewerCacheKey);
        $scope.brewers = this.brewers;

});
