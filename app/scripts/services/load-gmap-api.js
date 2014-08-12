'use strict';

/**
 * @ngdoc service
 * @name vtbtApp.loadgmapapi
 * @description
 * # loadgmapapi
 * Service in the vtbtApp.
 *
 *Courtesy of this gem: http://stackoverflow.com/questions/24246403/angularjs-load-google-map-script-async-in-directive-for-multiple-maps
 */

angular
    .module('vtbtApp')
    .service('loadGoogleMapAPI', function ($window, $q) {

        var deferred = $q.defer();

        function loadScript() {
            var scriptTag = document.createElement('script');
            scriptTag.src = '//maps.googleapis.com/maps/api/js?sensor=false&language=en&callback=initMap';
            angular.element(document.body).append(scriptTag);
        }

        $window.initMap = function () {
            deferred.resolve();
        };

        loadScript();

        return deferred.promise;
    });
