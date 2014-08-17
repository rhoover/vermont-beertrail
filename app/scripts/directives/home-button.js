'use strict';

/**
 * @ngdoc directive
 * @name vtbtApp.directive:homebutton
 * @description
 * # homebutton
 */

angular
    .module('vtbtApp')
    .directive('homeButton', function ($location) {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {

                //courtesy of http://stackoverflow.com/a/18994990
                element.on('click', function () {
                    scope.$apply(function () {
                        $location.path(attrs.homeButton);
                    });
                });

            }
        };
    });
