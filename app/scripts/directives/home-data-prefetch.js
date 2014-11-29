'use strict';

/**
 * @ngdoc directive
 * @name vtbtApp.directive:homeDataPrefetch
 * @description
 * # homeDataPrefetch
 */

angular
    .module('vtbtApp')
    .directive('homeDataPrefetch', function ($timeout, resolveBrewers) {

        return {

            restrict: 'A',

            link: function () {
                $timeout(function(){
                    resolveBrewers.brewers();
                }, 3000);
            }
        };
    });
