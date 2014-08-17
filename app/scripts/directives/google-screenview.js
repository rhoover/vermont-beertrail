'use strict';

/**
 * @ngdoc directive
 * @name vtbtApp.directive:googleScreenview
 * @description
 * # googleScreenview
 */

angular.module('vtbtApp')
    .directive('googleScreenview', function ($window, $location) {
        return {
            restrict: 'A',
            scope: true,
            link: function (scope, element, attrs) {
                ga('send', 'pageview', $location.path())
            }
        };
    });
