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
  .factory('analyticsGoogle', function () {

        return {
            logPageLoad: function ($window, scope, absoluteUrl, locationPath) {

                if (absoluteUrl.indexOf('vtbeertrail') > 0) {
                    $window._gaq.push(['_trackPageview', locationPath]);
                    // scope.$on('$viewContentLoaded', function (event) {
                    //     $window._gaq.push(['_trackPageview', locationPath]);
                    //     console.log('tracked!');
                    // });
                //      else {
                //     console.log('URL not tracked:', locationPath);
                // }
                }
            }
        };
  });
