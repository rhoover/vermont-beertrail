'use strict';

/**
 * @ngdoc service
 * @name vtbtApp.resolveFactory
 * @description
 * # resolveFactory
 * Factory in the vtbtApp.
 *Always refer to this for promises explanation: http://charemza.name/blog/posts/angularjs/promises/angularjs-promises/
 */

angular
    .module('vtbtApp')
    .factory('resolveFactory', function ($route, brewerFactory, storageFactory, weatherFactory, shoppingFactory, diningFactory, appDataFilter, brewerCacheKey, weatherCacheKey, diningCacheKey, shoppingCacheKey) {

        return {
            brewerResolve: function () {
                if ( storageFactory.getData(brewerCacheKey) !== null) {
                    return;
                } else {
                    var brewerDataReturn = brewerFactory.getBrewerData()
                        .then(function success(data) {
                            storageFactory.storeData(brewerCacheKey, data);
                        }, function failure() {
                            alert('Looks like someone mis-poured a beer, and now we are all paying the price.');
                        });
                        return brewerDataReturn;
                }
            }, //end brewerResolve

            weatherResolve: function() {
                if (storageFactory.getData(brewerCacheKey) === null) {
                    //aka $http.get('/my-first-url')
                    var weatherDataReturn = brewerFactory.getBrewerData()
                        .then(function success(data) {
                            storageFactory.storeData(brewerCacheKey, data);
                            var singleBrewer = appDataFilter.brewer(data, $route.current.params.selector);
                            //aka $http.get('/my-second-url')
                            return weatherFactory.weatherReturnedInfo(singleBrewer.latitude, singleBrewer.longitude);
                        })
                        .then(function success(data) {
                            storageFactory.storeData($route.current.params.selector + '-' + weatherCacheKey, data);
                        });
                    return weatherDataReturn;

                } else {
                    var singleBrewer = appDataFilter.brewer(storageFactory.getData(brewerCacheKey), $route.current.params.selector);
                    var weatherDataOneReturn = weatherFactory.weatherReturnedInfo(singleBrewer.latitude, singleBrewer.longitude)
                        .then(function success(data) {
                            storageFactory.storeData($route.current.params.selector + '-' + weatherCacheKey, data);
                        });
                    return weatherDataOneReturn;
                }
            }, //end weatherResolve

            diningResolve: function () {
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
            }, //end diningResolve

            shoppingResolve: function () {
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
            } //end shoppingResolve


        }; //end return

    });
