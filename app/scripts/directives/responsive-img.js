'use strict';

/**
 * @ngdoc directive
 * @name vtbtApp.directive:resImg
 * @description
 * # resImg
 */

angular
    .module('vtbtApp')
    .directive('resImg', function () {

        return {

            template: '<img class="brewerdetail-image"/>',
            restrict: 'E',
            replace: true,

            link: function (scope, element, attrs) {
                var pseudoResult = getComputedStyle(element[0], ':after').content;
                pseudoResult = pseudoResult.replace(/"/g,''); //Because Firefox keeps quotes from content
                switch (pseudoResult) {
                    case 'phone' :
                        element.attr('src', 'images/brewer100/' + scope.brewer.selector + '.png');
                    break;
                    case 'tablet' :
                        element.attr('src', 'images/brewer200/' + scope.brewer.selector + '.png');
                    break;
                    case 'computer' :
                        element.attr('src', 'images/brewer200/' + scope.brewer.selector + '.png');
                    break;
                }
            }
        };
    });
