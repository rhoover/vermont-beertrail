'use strict';

/**
 * @ngdoc directive
 * @name vtbtApp.directive:homeDataPrefetch
 * @description
 * # homeDataPrefetch
 */

angular
    .module('vtbtApp')
    .directive('homeDataPrefetch', function ($timeout, resolveFactory) {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                $timeout(function(){
                    resolveFactory.brewerResolve();
                }, 3000);
            }
        };
    });
