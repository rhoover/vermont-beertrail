'use strict';

/**
 * @ngdoc filter
 * @name vtbtApp.filter:findData
 * @function
 * @description
 * # findData
 * Filter in the vtbtApp.
 */

angular
    .module('vtbtApp')
    .filter('findData', function () {
        return {

            brewerFind: function (input, arg) {//input is the json file, arg is the selector property
                var foundBrewer = [];
                angular.forEach(input, function (brewerObject) {
                    if (brewerObject.selector === arg) {
                        this.push(brewerObject);
                    }
                }, foundBrewer);
                return foundBrewer.shift(); //pulls object out of array
            },

            businessFind: function (input, arg) {
                var foundBusiness = [];
                angular.forEach(input, function (businessObject) {
                    if (businessObject.id === arg) {
                        this.push(businessObject);
                    }
                }, foundBusiness);
                return foundBusiness.shift();
            }
        };
    });
