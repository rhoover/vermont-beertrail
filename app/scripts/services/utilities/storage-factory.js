'use strict';

/**
 * @ngdoc service
 * @name vtbtApp.storagefactory
 * @description
 * # storagefactory
 * Factory in the vtbtApp.
 */

angular
    .module('vtbtApp')
    .factory('storageFactory', function () {

        return {
            storeData: function (key, data) {
                sessionStorage.setItem(key, angular.toJson(data));
            },
            getData: function(key) {
                return angular.fromJson(sessionStorage.getItem(key));
            }
        };
    });
