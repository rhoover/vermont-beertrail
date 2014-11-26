'use strict';

/**
 * @ngdoc service
 * @name vtbtApp.analyticsGoogle
 * @description
 * # analyticsGoogle
 * Factory in the vtbtApp.
 ********  Here for historical/reference purposes
 */

angular
  .module('vtbtApp')
  .factory('analyticsGoogle', function ($window) {

        return {
            logPageLoad: function (scope, absoluteUrl, locationPath) {

                if (absoluteUrl.indexOf('vtbeertrail') > 0) {
                    $window.ga('send', 'pageview', locationPath);
                }
            }
        };
  });
