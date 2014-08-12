'use strict';

/**
 * @ngdoc filter
 * @name vtbtApp.filter:datafilter
 * @function
 * @description
 * # datafilter
 * Filter in the vtbtApp.
 */

angular
    .module('vtbtApp')
    .filter('appData', function () {
        return {
            brewer: function (input, arg) { //input is the json file, arg is the selector property

                var outBrewerData = [];
                angular.forEach(input, function (brewerObject) {
                    if (brewerObject.selector === arg) {
                        this.push(brewerObject);
                    }
                }, outBrewerData);
                return outBrewerData.shift(); //pulls object out of array
            },
            business: function (input, arg) {

                var outBusinessData = [];
                angular.forEach(input, function (businessObject) {
                    if (businessObject.id === arg) {
                        this.push(businessObject);
                    }
                }, outBusinessData);
                return outBusinessData.shift();
            }
        }; //end return
    });
