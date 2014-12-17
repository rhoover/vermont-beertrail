'use strict';

/**
 * @ngdoc function
 * @name vtbtApp.controller:ListshoppingCtrl
 * @description
 * # ListshoppingCtrl
 * Controller of the vtbtApp
 */

angular
    .module('vtbtApp')
    .controller('ListShoppingCtrl', function ($routeParams, storageFactory,  sortDataFilter, findDataFilter, shoppingCacheKey, brewerCacheKey) {

        this.shoppingList = sortDataFilter.businessSort(storageFactory.getData($routeParams.selector + '-' + shoppingCacheKey).businesses);
        this.brewer = findDataFilter.brewerFind(storageFactory.getData(brewerCacheKey), $routeParams.selector);
    });
