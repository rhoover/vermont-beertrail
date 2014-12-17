'use strict';

/**
 * @ngdoc function
 * @name vtbtApp.controller:ListDiningCtrl
 * @description
 * # ListDiningCtrl
 * Controller of the vtbtApp
 */

angular
    .module('vtbtApp')
    .controller('ListDiningCtrl', function ($routeParams, storageFactory, sortDataFilter, findDataFilter, diningCacheKey, brewerCacheKey) {

        this.diningList = sortDataFilter.businessSort(storageFactory.getData($routeParams.selector + '-' + diningCacheKey).businesses);
        this.brewer = findDataFilter.brewerFind(storageFactory.getData(brewerCacheKey), $routeParams.selector);

    });
