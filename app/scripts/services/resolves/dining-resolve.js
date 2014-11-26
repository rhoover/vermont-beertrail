'use strict';

/**
 * @ngdoc service
 * @name vtbtApp.resolveDining
 * @description
 * # resolveDining
 * Factory in the vtbtApp.
 */

angular
    .module('vtbtApp')
    .factory('resolveDining', function ($route, storageFactory, brewerFactory, appDataFilter, diningFactory, brewerCacheKey, diningCacheKey) {

        return {
            dining: function () {
                if (storageFactory.getData(brewerCacheKey) === null) {
                    var diningDataReturn = brewerFactory.getBrewerData()
                        .then(function success(data) {
                            storageFactory.storeData(brewerCacheKey, data);
                            var singleBrewer = appDataFilter.brewer(data, $route.current.params.selector);
                            return diningFactory.yelpDiningInfo(singleBrewer.latitude, singleBrewer.longitude);
                        })
                        .then(function success(data) {
                            storageFactory.storeData($route.current.params.selector + '-' + diningCacheKey, data);
                        });
                    return diningDataReturn;
                } else {
                    var singleBrewer = appDataFilter.brewer(storageFactory.getData(brewerCacheKey), $route.current.params.selector);
                    var diningDataOneReturn = diningFactory.yelpDiningInfo(singleBrewer.latitude, singleBrewer.longitude)
                        .then(function success(data) {
                            storageFactory.storeData($route.current.params.selector + '-' + diningCacheKey, data);
                        });
                    return diningDataOneReturn;
                }
            }
        };
    });
