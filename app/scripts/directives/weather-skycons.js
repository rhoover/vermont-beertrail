'use strict';

/**
 * @ngdoc directive
 * @name vtbtApp.directive:weatherskycons
 * @description
 * # weatherskycons
 */

angular
    .module('vtbtApp')
    .directive('weatherSkycons', function ($timeout, skyconConvert) {

        return {
            restrict: 'E',
            scope: '@',
            template: '<canvas></canvas>',
            replace: true,

            link: function (scope, element, attrs) {
                var canvasElement = element[0];
                var skyconConfig = {
                    color: 'grey',
                    resizeClear: true
                };

                // $timeout(function () {
                    var skyconInfo = attrs.skycon;
                    var skyconSyntax = skyconConvert.skyconIcon(skyconInfo);
                    var skycons = new Skycons(skyconConfig);
                    skycons.set(canvasElement, skyconSyntax);
                    skycons.play();
                // }, 4000);

            } //end link
        }; //end return
    });
