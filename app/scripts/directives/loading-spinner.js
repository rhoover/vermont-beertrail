'use strict';

/**
 * @ngdoc directive
 * @name vtbtApp.directive:loadingSpinner
 * @description
 * # loadingSpinner
 */

angular.module('vtbtApp')
    .directive('loadingSpinnerWidget', function (loadingSpinner) {
        return {
            restrict: 'A',
            link: function link(scope, element) {

                loadingSpinner.subscribeOnStart(function () {
                    element.addClass('spinner-block-progress');
                    element.children(1).addClass('spinner-progress');
                });

                loadingSpinner.subscribeOnEnd(function () {
                    if (loadingSpinner.getRequestCount() ===0) {
                        element.removeClass('spinner-block-progress');
                        element.children(1).removeClass('spinner-progress');
                    }
                });
            }
        };
    });
