'use strict';

/**
 * @ngdoc filter
 * @name vtbtApp.filter:sortData
 * @function
 * @description
 * # sortData
 * Filter in the vtbtApp.
 */

angular
    .module('vtbtApp')
    .filter('sortData', function () {

        return {

            brewerSort: function (input) {
                var sortedBrewers = [];
                sortedBrewers = input.sort(function (a, b) {
                    return (a.selector < b.selector) ? -1 : 1;
                });
                return sortedBrewers;
            },

            businessSort: function (input) {
                var sortedBusinesses = [];
                sortedBusinesses = input.sort(function (a, b) {
                    return (a.name < b.name) ? -1 : 1;
                });
                return sortedBusinesses;
            }
        };
    });
