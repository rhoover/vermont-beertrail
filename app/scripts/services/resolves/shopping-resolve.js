'use strict';

/**
 * @ngdoc service
 * @name vtbtApp.resolveShopping
 * @description
 * # resolveShopping
 * Factory in the vtbtApp.
 */

angular
    .module('vtbtApp')
    .factory('resolveShopping', function ($route, storageFactory, brewerFactory, appDataFilter, shoppingFactory, brewerCacheKey, shoppingCacheKey) {

        return {
            shopping: function () {
                if (storageFactory.getData(brewerCacheKey) === null) {
                    var shoppingDataReturn = brewerFactory.getBrewerData()
                        .then(function success(data) {
                            storageFactory.storeData(brewerCacheKey, data);
                            var singleBrewer = appDataFilter.brewer(data, $route.current.params.selector);
                            return shoppingFactory.yelpShoppingInfo(singleBrewer.latitude, singleBrewer.longitude);
                        })
                        .then(function success(data) {
                            storageFactory.storeData($route.current.params.selector + '-' + shoppingCacheKey, data);
                        });
                    return shoppingDataReturn;
                } else {
                    var singleBrewer = appDataFilter.brewer(storageFactory.getData(brewerCacheKey), $route.current.params.selector);
                    var shoppingDataOneReturn = shoppingFactory.yelpShoppingInfo(singleBrewer.latitude, singleBrewer.longitude)
                        .then(function success(data) {
                            storageFactory.storeData($route.current.params.selector + '-' + shoppingCacheKey, data);
                        });
                    return shoppingDataOneReturn;
                }
            }
        };
    });
