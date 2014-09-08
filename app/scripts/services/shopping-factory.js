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
    .factory('shoppingFactory', function ($http, $route, yelpKey) {

        return {
                yelpShoppingInfo: function (lat, lon) {
                return $http.jsonp('https://api.yelp.com/business_review_search?' + 'limit=20' + '&category=shopping+arts+active+localservices+localflavor+food+tours+auto' + '&lat=' + lat + '&long=' + lon + '&ywsid=' + yelpKey + '&callback=JSON_CALLBACK')
                .then(function (result) {
                    return result.data;
                });
            }
        }; //end return
    });
