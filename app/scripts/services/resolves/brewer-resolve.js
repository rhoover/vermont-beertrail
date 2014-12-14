'use strict';

/**
 * @ngdoc service
 * @name vtbtApp.resolveBrewers
 * @description
 * # resolveBrewers
 * Factory in the vtbtApp.
 */

angular
    .module('vtbtApp')
    .factory('resolveBrewers', function (brewerFactory, storageFactory, sortDataFilter, brewerCacheKey) {

        return {
            brewers: function () {
                if ( storageFactory.getData(brewerCacheKey) !== null) {
                    return;
                } else {
                    var brewerDataReturn = brewerFactory.getBrewerData()
                        .then(function success(data) {
                            storageFactory.storeData(brewerCacheKey, sortDataFilter.brewerSort(data)); //store sorted data
                        }, function failure() {
                            alert('Looks like someone mis-poured a beer, and now we are all paying the price.');
                        });
                        return brewerDataReturn;
                }
            }
        };
    });
