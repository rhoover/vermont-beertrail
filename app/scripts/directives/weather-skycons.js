'use strict';

/**
 * @ngdoc directive
 * @name vtbtApp.directive:weatherSkycons
 * @description
 * # weatherskycons
 */

angular
    .module('vtbtApp')
    .directive('weatherSkycons', function (skyconConvert) {

        return {
            restrict: 'E',
            scope: '@',
            template: '<canvas></canvas>',
            replace: true,

            link: function (scope, element, attrs) {

                var skycons = new Skycons({color:'grey', resizeClear:true});
                skycons.set(element[0], skyconConvert.skyconIcon(attrs.skycon));
                skycons.play();

            } //end link
        }; //end return
    });
