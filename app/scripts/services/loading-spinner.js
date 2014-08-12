'use strict';

/**
 * @ngdoc service
 * @name vtbtApp.loadingSpinner
 * @description
 * # loadingSpinner
 * Provider in the vtbtApp.
 *Inspired by and courtesy of: http://www.kvetis.com/2014/01/angularjs-loading-widget.html
 */

angular
    .module('vtbtApp')
    // .provider('loadingSpinner', function (loadingSpinnerProvider) {
    .provider('loadingSpinner', function () {
        var startListening = [];
        var endListening = [];
        var count = 0;

        // Counter in case of multiple http Requests
        var requestCounter = {
            increment: function () {
                count++;
            },
            decrement: function () {
                if (count > 0) {
                    count--;
                }
            },
            getCount: function () {
                return count;
            }
        };

        //Request-Starting Subscription
        this.subscribeOnStart = function (listener) {
            startListening.push(listener);
        };

        //Spread the news to the Provider
        this. fireRequestStarted = function (request) {
            requestCounter.increment();
            angular.forEach(startListening, function (listener) {
                listener(request);
            });
            return request;
        };

        //Request-Ending Subscription
        this. subscribeOnEnd = function (listener) {
            endListening.push(listener);
        };

        //Spread the news to the Provider
        this. fireRequestEnded = function () {
            requestCounter.decrement();
            var passedArgs = arguments;
            angular.forEach(endListening, function (listener) {
                listener.apply(this, passedArgs);
            });
            return arguments[0];
        };

        this. getRequestCount = requestCounter.getCount();

        // Method for Instantiating Service
        this.$get = function () {
            var that = this;
            return {
                subscribeOnStart: that.subscribeOnStart,
                fireRequestStarted: that.fireRequestStarted,
                subscribeOnEnd: that.subscribeOnEnd,
                fireRequestEnded: that.fireRequestEnded,
                getRequestCount: that.getRequestCount
            };
        };
    });
