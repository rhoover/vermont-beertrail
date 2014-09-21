'use strict';

/**
 * @ngdoc directive
 * @name vtbtApp.directive:googlemap
 * @description
 * # googlemap
 */

angular
    .module('vtbtApp')
    .directive('singleMarkerMap', function (loadGoogleMapAPI, googleMapStuff) {

        return {
            restrict: 'A',
            // scope: true,
            scope: {
                lat: '@lat',
                lon: '@lon',
                lati: '@lati',
                loni: '@loni'
            },
            link: function (scope, element, attrs) {

                //note this is an abstraction on top of standard GoogleMaps initialization stuff, so we don't repeat ourselves
                var myMapOptions, map, marker, circle, dynamicCircle;
                var div = element[0];

                scope.initialize = function () {

                    myMapOptions = googleMapStuff.mapOptions(10, attrs.lat, attrs.lon);

                    map = googleMapStuff.mapCreator(div, myMapOptions);

                    marker = googleMapStuff.mapMarker(map, attrs.lat, attrs.lon);

                    circle = googleMapStuff.gpsCircle(map, attrs.lati, attrs.loni);

                    dynamicCircle = googleMapStuff.dynamicCircle(map, circle);

                };

                loadGoogleMapAPI.then(function () {

                    //promise succeeded
                    scope.initialize();
                }, function () {

                    //promise failed
                    /* jshint validthis: true */
                    alert('Google maps is clearly not co-operating');
                    /* jshint validthis: true */
                });

            } //end link
        }; //end return
    });
