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
    .factory('resolveFactory', function ($route, brewerFactory, storageFactory, weatherFactory, shoppingFactory, diningFactory, appDataFilter) {

        return {
            brewerResolve: function () {
                if ( storageFactory.getData('brewer-list-cache') !== null) {
                    return;
                } else {
                    var brewerDataReturn = brewerFactory.getBrewerData()
                        .then(function success(data) {
                            storageFactory.storeData('brewer-list-cache', data);
                        }, function failure() {
                            alert('Looks like someone mis-poured a beer, and now we are all paying the price.');
                        });
                        return brewerDataReturn;
                }
            },

            weatherResolve: function() {
                if (storageFactory.getData('brewer-list-cache') === null) {
                    //aka $http.get('/my-first-url')
                    var weatherDataReturn = brewerFactory.getBrewerData()
                    .then(function success(data) {
                        storageFactory.storeData('brewer-list-cache', data);
                        var singleBrewer = appDataFilter.brewer(data, $route.current.params.selector);
                        //aka $http.get('/my-second-url')
                        return weatherFactory.weatherReturnedInfo(singleBrewer.latitude, singleBrewer.longitude);
                    })
                    .then(function success(data) {
                        storageFactory.storeData($route.current.params.selector + '-' + 'weather-cache', data);
                    });
                    return weatherDataReturn;

                } else {
                    var singleBrewer = appDataFilter.brewer(storageFactory.getData('brewer-list-cache'), $route.current.params.selector);
                    var weatherDataOneReturn = weatherFactory.weatherReturnedInfo(singleBrewer.latitude, singleBrewer.longitude)
                    .then(function success(data) {
                        storageFactory.storeData($route.current.params.selector + '-' + 'weather-cache', data);
                    });
                    return weatherDataOneReturn;
                }
            }, //end weatherResolve

            diningResolve: function () {
                if (storageFactory.getData('brewer-list-cache') === null) {
                    var diningDataReturn = brewerFactory.getBrewerData()
                    .then(function success(data) {
                        storageFactory.storeData('brewer-list-cache', data);
                        var singleBrewer = appDataFilter.brewer(data, $route.current.params.selector);
                        return diningFactory.yelpDiningInfo(singleBrewer.latitude, singleBrewer.longitude);
                    })
                    .then(function success(data) {
                        storageFactory.storeData($route.current.params.selector + '-' + 'dining-cache', data);
                    });
                    return diningDataReturn;
                } else {
                    var singleBrewer = appDataFilter.brewer(storageFactory.getData('brewer-list-cache'), $route.current.params.selector);
                    var diningDataOneReturn = diningFactory.yelpDiningInfo(singleBrewer.latitude, singleBrewer.longitude)
                    .then(function success(data) {
                        storageFactory.storeData($route.current.params.selector + '-' + 'dining-cache', data);
                    });
                    return diningDataOneReturn;
                }
            }


        }; //end return

    });
