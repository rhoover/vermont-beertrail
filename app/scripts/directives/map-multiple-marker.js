'use strict';

/**
 * @ngdoc directive
 * @name vtbtApp.directive:mapMultipleMarker
 * @description
 * # mapMultipleMarker
 */

angular.module('vtbtApp')
    .directive('multipleMarkerMap', function (loadGoogleMapAPI, googleMapStuff) {

        return {

            restrict: 'A',
            scope: true,

            link: function (scope, element) {
                scope.initialize = function () {
                    //note this is an abstraction on top of standard GoogleMaps initialization stuff, so we don't repeat ourselves
                    var myMapOptions, map, marker, infoContent, infowindow;
                    var div = element[0];
                    myMapOptions = googleMapStuff.mapOptions(7, 44.0407, -72.7093);
                    map = googleMapStuff.mapCreator(div, myMapOptions);

                    for (var i = 0; i < scope.brewers.length; i++) {
                        marker = googleMapStuff.mapMarker(map, scope.brewers[i].latitude, scope.brewers[i].longitude);
                        infoContent = '<p class="info-window-text">'+scope.brewers[i].name+'</br>'+
                        scope.brewers[i].address+'</br>'+
                        scope.brewers[i].city+'</p>'+
                        '<a href="#!/'+scope.brewers[i].selector+' ">Go To Listing</a>';
                        infowindow = googleMapStuff.infoWindowCreator(infoContent);
                        googleMapStuff.infoWindowsClick(map, marker, infowindow, infoContent);
                    }

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
        };
    });
