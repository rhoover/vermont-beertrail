'use strict';

/**
 * @ngdoc directive
 * @name vtbtApp.directive:mobileHome
 * @description
 * # mobileHome
 */

angular
    .module('vtbtApp')
    .directive('mobileHome', function ($location) {

        return {

            restrict: 'A',
            scope: {},

            link: function (scope, element) {
                scope.$on('$locationChangeSuccess', function () {
                    if ($location.path() === '/') {
                        element.addClass('body-small-home');
                    } else {
                        element.removeClass('body-small-home');
                    }
                });
            }
        };
    });
