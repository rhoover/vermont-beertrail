'use strict';

/**
 * @ngdoc directive
 * @name vtbtApp.directive:telephoneCall
 * @description
 * # telephoneCall
 */

angular
    .module('vtbtApp')
    .directive('telephoneCall', function ($window, $location) {

        return {
            restrict: 'A',
            scope: true,
            link: function (scope, element, attrs) {
                var callTo = scope.brewer.selector;
                element.on('click', function () {
                    ga('send', 'event', 'button', 'click', callTo + '-' + 'telephone-call', 1);
                });

            }
        };
    });
