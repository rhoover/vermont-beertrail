'use strict';

/**
 * @ngdoc service
 * @name vtbtApp.analyticsGoogle
 * @description
 * # analyticsGoogle
 * Factory in the vtbtApp.
 */

angular
  .module('vtbtApp')
  .factory('analyticsGoogle', function ($window) {

        return {
            logPageLoad: function (scope, absoluteUrl, locationPath) {

                if (absoluteUrl.indexOf('vtbeertrail') > 0) {
                    $window._gaq.push(['_trackPageview', locationPath]);
                }
            }
        };
  });
