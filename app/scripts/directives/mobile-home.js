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
            scope: {
                bodyBg: '@mobileHome'
            },
            link: function (scope, element, attrs) {
                scope.$on('$locationChangeSuccess', function () {
                    if ($location.path() === scope.bodyBg) {
                        element.addClass('body-small-intro');
                    } else {
                        element.removeClass('body-small-intro');
                    }
                });
            }
        };
    });
