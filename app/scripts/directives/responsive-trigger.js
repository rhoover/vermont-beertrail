'use strict';

/**
 * @ngdoc directive
 * @name vtbtApp.directive:resTrigger
 * @description
 * # resTrigger
 */

angular.module('vtbtApp')
    .directive('resTrigger', function () {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                //Responsive Image Solution
                //Inspired by: http://tech.particulate.me/javascript/2013/10/10/how-to-conveniently-check-for-responsive-breakpoints-in-javascript/
                scope = {};
                var result = getComputedStyle(element[0], ':after').content;
                result = result.replace(/"/g,''); //Because Firefox keeps quotes from content
                switch (result) {
                    case "phone" :
                        element.addClass("small");
                    break;
                    case "tablet" :
                        element.addClass("medium");
                    break;
                    case "laptop" :
                        element.addClass("medium-large");
                    break;
                    case "computer" :
                        element.addClass("large");
                    break;
                };

            }
        };
    });
