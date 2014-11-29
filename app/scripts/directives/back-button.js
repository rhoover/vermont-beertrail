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
                function goBack() {
                    history.back();
                    scope.$apply();
                }
                element.bind('click', goBack);
            }
        };
    });
