'use strict';

/**
 * @ngdoc service
 * @name vtbtApp.resolveFactory
 * @description
 * # resolveFactory
 * Factory in the vtbtApp.
 */

angular
    .module('vtbtApp')
    .factory('resolveFactory', function ($route, brewerFactory, storageFactory, weatherFactory, shoppingFactory, diningFactory, appDataFilter) {

        return {

            brewerResolve: function () {
                var checkingBrewers = storageFactory.getData('brewer-list-cache');
                if (checkingBrewers !== null) {
                    return;
                } else {
                    brewerFactory.getBrewerData()
                        .success(function (data) {

                            storageFactory.storeData('brewer-list-cache', data);

                    });
                }
            },

            weatherResolve: function() {
                var checkingBrewers = storageFactory.getData('brewer-list-cache');
                if (checkingBrewers === null) {

                    brewerFactory.getBrewerData().success(function (brewerData) {

                        storageFactory.storeData('brewer-list-cache', brewerData);

                    })
                    .success(function (brewerData) {

                        var singleBrewer = appDataFilter.brewer(brewerData, $route.current.params.selector);
                        return weatherFactory.weatherReturnedInfo(singleBrewer.latitude, singleBrewer.longitude)
                            .success(function (data) {
                                return storageFactory.storeData($route.current.params.selector + '-' + 'weather-cache', data);
                            });

                    });

                } else {

                    var singleBrewer = appDataFilter.brewer(storageFactory.getData('brewer-list-cache'), $route.current.params.selector);
                    var checkingWeather = storageFactory.getData($route.current.params.selector + '-' + 'weather-cache');

                    if (checkingWeather === null) {

                        return weatherFactory.weatherReturnedInfo(singleBrewer.latitude, singleBrewer.longitude)
                            .success(function (data) {
                                return storageFactory.storeData($route.current.params.selector + '-' + 'weather-cache', data);
                            });
                    } else {
                        return;
                    }
                } //end checkingBrewers if..else
            }, //end weatherResolve

            //
            //Giving up on this for the time being as chained promises are a problem to get
            //to work in app.js resolve
            //figured it out:  because .success drives parallel operations while .then drives sequential operations!!!!!!!
            //
            // shoppingResolve: function() {
            //     var checkingBrewers = storageFactory.getData('brewer-list-cache');
            //     if (checkingBrewers === null) {

            //         brewerFactory.getBrewerData().success(function (brewerData) {

            //             storageFactory.storeData('brewer-list-cache', brewerData);

            //         })
            //         .success(function (brewerData) {

            //             var singleBrewer = appDataFilter.brewer(brewerData, $route.current.params.selector);
            //             return shoppingFactory.yelpShoppingInfo(singleBrewer.latitude, singleBrewer.longitude)
            //                 .success(function (data) {
            //                     return storageFactory.storeData($route.current.params.selector + '-' + 'shopping-cache', data);
            //                 });

            //         });

            //     } else {

            //         var singleBrewer = appDataFilter.brewer(storageFactory.getData('brewer-list-cache'), $route.current.params.selector);
            //         var checkingShopping = storageFactory.getData($route.current.params.selector + '-' + 'shopping-cache');

            //         if (checkingShopping === null) {

            //             return shoppingFactory.yelpShoppingInfo(singleBrewer.latitude, singleBrewer.longitude)
            //                 .success(function (data) {
            //                     return storageFactory.storeData($route.current.params.selector + '-' + 'shopping-cache', data);
            //                 });
            //         } else {
            //             return;
            //         }
            //     } //end checkingBrewers if..else
            // }, //end shoppingResolve

            // diningResolve: function() {
            //     var checkingBrewers = storageFactory.getData('brewer-list-cache');
            //     if (checkingBrewers === null) {

            //         brewerFactory.getBrewerData().success(function (brewerData) {

            //             storageFactory.storeData('brewer-list-cache', brewerData);

            //         })
            //         .success(function (brewerData) {

            //             var singleBrewer = appDataFilter.brewer(brewerData, $route.current.params.selector);
            //             return diningFactory.yelpDiningInfo(singleBrewer.latitude, singleBrewer.longitude)
            //                 .success(function (data) {
            //                     return storageFactory.storeData($route.current.params.selector + '-' + 'dining-cache', data);
            //                 });

            //         });

            //     } else {

            //         var singleBrewer = appDataFilter.brewer(storageFactory.getData('brewer-list-cache'), $route.current.params.selector);
            //         var checkingDining = storageFactory.getData($route.current.params.selector + '-' + 'dining-cache');

            //         if (checkingDining === null) {

            //             return diningFactory.yelpDiningInfo(singleBrewer.latitude, singleBrewer.longitude)
            //                 .success(function (data) {
            //                     return storageFactory.storeData($route.current.params.selector + '-' + 'dining-cache', data);
            //                 });
            //         } else {
            //             return;
            //         }
            //     } //end checkingBrewers if..else
            // } //end diningResolve

        }; //end return

    });
