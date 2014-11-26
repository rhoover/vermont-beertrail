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
    .factory('shoppingFactory', function ($http, $route, YELPKEY) {

        return {
                yelpShoppingInfo: function (lat, lon) {
                return $http.jsonp('https://api.yelp.com/business_review_search?' + 'limit=20' + '&category=shopping+arts+active+localservices+localflavor+food+tours+auto' + '&lat=' + lat + '&long=' + lon + '&ywsid=' + YELPKEY + '&callback=JSON_CALLBACK', {cache: false})
                .then(function (result) {
                    return result.data;
                });
            }
        }; //end return
    });
