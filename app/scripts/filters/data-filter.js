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
            },
            brewerList: function (input) {

                var sortedBrewers= [];
                sortedBrewers = input.sort(function (a, b) {
                    // if (a.selector < b.selector)
                    //     {
                    //         return -1;
                    //     }
                    // if (a.selector > b.selector)
                    //     {
                    //         return 1;
                    //     }
                    // return 0;
                    return (a.selector < b.selector) ? -1 : 1;
                });

                return sortedBrewers;
            },
            businessList: function (input) {

                var sortedBusinesses= [];
                sortedBusinesses = input.sort(function (a, b) {
                    // if (a.name < b.name)
                    //     {
                    //         return -1;
                    //     }
                    // if (a.name > b.name)
                    //     {
                    //         return 1;
                    //     }
                    // return 0;
                    return (a.name < b.name) ? -1 : 1;
                });

                return sortedBusinesses;
            },
            sortList: function (input, comparator) {
console.log(comparator);
                var sortedList= [];
                sortedList = input.sort(function (a, b) {
                    if (a.comparator < b.comparator)
                        {
                            return -1;
                        }
                    if (a.comparator > b.comparator)
                        {
                            return 1;
                        }
                    return 0;
                });
console.log(sortedList);
                return sortedList;
            }
        }; //end return
    });
