'use strict';

/**
 * @ngdoc directive
 * @name vtbtApp.directive:backbutton
 * @description
 * # backbutton
 */

angular
    .module('vtbtApp')
    .directive('backButton', function () {

        return {

            restrict: 'A',

            link: function (scope, element) {
                element.on('click', function () {
                    scope.$apply(function () {
                        history.back();
                    });
                });
            }
        };
    });