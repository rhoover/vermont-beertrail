'use strict';

/**
 * @ngdoc directive
 * @name vtbtApp.directive:scrollToTop
 * @description
 * # scrollToTop
 * Courtesy: http://jsfiddle.net/62MTU/15/
 */

angular
    .module('vtbtApp')
    .directive('scrollToTop', function () {
        return {
            restrict: 'A',
            link: function postLink(scope, element, attrs) {

                Math.easeInOutQuad = function (t, b, c, d) { //t = current time, b = start value, c = change in value, d = duration
                    t /= d/2;
                    if (t < 1) {
                        return c/2*t*t + b;
                    }
                    t--;
                    return -c/2 * (t*(t-2) - 1) + b;
                };

                function scrollMe(element, to, duration) {

                    var start = element.scrollTop,
                        change = to - start,
                        currentTime = 0,
                        increment = 20;

                    var animateScroll = function(){
                        currentTime += increment;
                        var val = Math.easeInOutQuad(currentTime, start, change, duration);
                        element.scrollTop = val;
                        if(currentTime < duration) {
                            requestAnimationFrame(animateScroll);
                        }
                    };

                    animateScroll();
                }

                element.on('click', function () {
                    scrollMe(document.body, 0, 2000);// for Chrome
                    scrollMe(document.documentElement, 0, 2000);// for Firefox
                });
            }
        };
    });
