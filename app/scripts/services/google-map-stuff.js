'use strict';

/**
 * @ngdoc service
 * @name vtbtApp.googlemapstuff
 * @description
 * # googlemapstuff
 * Service in the vtbtApp.
 *
 * Repeatable map options and initialize/config
 */

angular
    .module('vtbtApp')
    .service('googleMapStuff', function googleMapStuff() {
        return {
            mapOptions: function (zoom, lat, lon) {
                var mapOptionsStuff; //google insists be defined

                return mapOptionsStuff = {
                    zoom: zoom,
                    center: new google.maps.LatLng(lat, lon),
                    mapTypeControl: true,
                    mapTypeControlOptions: {
                        style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
                    },
                    zoomControl: true,
                    streetViewControl: false,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                };
            },
            mapCreator: function (div, myMapOptions) {
                return new google.maps.Map(div, myMapOptions);
            },
            mapMarker: function (map, lat, lon) {
                return new google.maps.Marker ({
                    position: new google.maps.LatLng(lat, lon),
                    map: map
                });
            },
            infoWindowCreator: function (infoContent) {
                // var infoWindowStuff;
                // infoWindowStuff = new google.maps.InfoWindow({
                //     content: infoContent
                // });
                // return infoWindowStuff;
                return new google.maps.InfoWindow({
                    content: infoContent
                });
            },
            infoWindowClick: function (map, marker, infowindow) {
                // var clickEventStuff;
                // clickEventStuff = google.maps.event.addListener(marker, 'click', function () {
                //     infowindow.open(map, marker);
                // });
                // return clickEventStuff;
                return google.maps.event.addListener(marker, 'click', function () {
                    infowindow.open(map, marker);
                });
            },
            infoWindowsClick: function (map, marker, infowindow, infoContent) {
                // var multipleClickEventStuff;
                // //Notice closure pattern, necessary for map with multiple markers
                // multipleClickEventStuff = google.maps.event.addListener(marker, 'click', (function (marker, infoContent) {
                //         return function () {
                //             infowindow.setContent(infoContent);
                //             infowindow.open(map, marker);
                //         };
                //     })(marker, infoContent));
                // return multipleClickEventStuff;
                return google.maps.event.addListener(marker, 'click', (function (marker, infoContent) {
                        return function () {
                            infowindow.setContent(infoContent);
                            infowindow.open(map, marker);
                        };
                    })(marker, infoContent));
            }
        };
    });
