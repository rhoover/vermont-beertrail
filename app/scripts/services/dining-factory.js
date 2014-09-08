'use strict';

/**
 * @ngdoc service
 * @name vtbtApp.diningfactory
 * @description
 * # diningfactory
 * Factory in the vtbtApp.
 */

angular
    .module('vtbtApp')
    .factory('diningFactory', function ($http, $route, yelpKey, storageFactory) {

        return {
            yelpDiningInfo: function (lat, lon) {
                return $http.jsonp('https://api.yelp.com/business_review_search?' + 'limit=20' + '&category=restaurants' + '&lat=' + lat + '&long=' + lon + '&ywsid=' + yelpKey + '&callback=JSON_CALLBACK')
                .then(function (result) {
                    return result.data;
                });
            }
        }; //end return
    });
