'use strict';

/**
 * @ngdoc service
 * @name vtbtApp.resolveWeather
 * @description
 * # resolveWeather
 * Factory in the vtbtApp.
 */

angular
    .module('vtbtApp')
    .factory('resolveWeather', function ($route, weatherFactory, storageFactory, brewerFactory, appDataFilter, brewerCacheKey, weatherCacheKey) {

        return {
            weather: function () {
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
            }
        };
    });
