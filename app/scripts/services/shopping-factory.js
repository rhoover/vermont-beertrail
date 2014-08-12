'use strict';

/**
 * @ngdoc service
 * @name vtbtApp.shoppingFactory
 * @description
 * # shoppingFactory
 * factory in the vtbtApp.
 */

angular
    .module('vtbtApp')
    .factory('shoppingFactory', function ($http, $route, yelpKey, storageFactory) {

        return {
            yelpShoppingInfo: function (lat, lon) {
                var yelpShoppingUrl = 'https://api.yelp.com/business_review_search?' + 'limit=20' + '&category=shopping+arts+active+localservices+localflavor+food+tours+auto' + '&lat=' + lat + '&long=' + lon + '&ywsid=' + yelpKey + '&callback=JSON_CALLBACK';

                return $http.jsonp(yelpShoppingUrl, {cache:true})
                    .success(function (data) {
                        storageFactory.storeData($route.current.params.selector + '-' + 'shopping-cache', data);
                        return data;
                    });
            }
        };
    });
