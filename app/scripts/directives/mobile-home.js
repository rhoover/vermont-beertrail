'use strict';

/**
 * @ngdoc directive
 * @name vtbtApp.directive:mobileHome
 * @description
 * # mobileHome
 */

angular
    .module('vtbtApp')
    .directive('mobileHome', function ($location, $timeout) {

        return {

            restrict: 'A',
            scope: {},

            link: function (scope, element, attrs) {
                var bodyResult = getComputedStyle(element[0], ':after').content;
                bodyResult = bodyResult.replace(/"/g,''); //Because Firefox keeps quotes from content

                switch (bodyResult) {
                    case 'phone' :
                        scope.$on('$locationChangeSuccess', function () {
                            if ($location.path() === '/') {
                                $timeout(function(){
                                    element.addClass('body-small-home');
                                }, 500);
                            } else {
                                $timeout(function(){
                                    element.removeClass('body-small-home');
                                }, 500);
                            }
                        });
                    break;
                }
            }
        };
    });
