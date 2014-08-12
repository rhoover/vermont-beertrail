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
                var storeMe = angular.toJson(data);
                sessionStorage.setItem(key, storeMe);
            },
            getData: function(key) {
                var value = sessionStorage.getItem(key);
                var parseMe = angular.fromJson(value);
                return parseMe;
            }
        };
    });
