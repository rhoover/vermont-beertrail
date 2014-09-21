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
                return new google.maps.Marker({
                    position: new google.maps.LatLng(lat, lon),
                    map: map
                });
            },
            gpsCircle: function (map, lat, lon) {
                var gpsCircle = new google.maps.Circle({
                    map:map,
                    center: new google.maps.LatLng(lat, lon),
                    radius: 1000,
                    fillColor: '#00BFFF',
                    fillOpacity: .45,
                    strokeColor: '#00008B',
                    strokeWeight: 1
                });
                return gpsCircle;
            },
            dynamicCircle: function (map, circle) {
                return google.maps.event.addListener(map, 'zoom_changed', function () {
                    var zoomLevel = map.getZoom();
                    console.log(zoomLevel);
                    switch(true) {
                        case (zoomLevel <= 9):
                            circle.setRadius(2000);
                            break;
                        case (zoomLevel <= 11 && zoomLevel > 10):
                            circle.setRadius(400);
                            break;
                        case (zoomLevel <= 12 && zoomLevel > 11):
                            circle.setRadius(300);
                            break;
                        case (zoomLevel <= 13 && zoomLevel > 12):
                            circle.setRadius(100);
                            break;
                        case (zoomLevel <= 14 && zoomLevel > 13):
                            circle.setRadius(50);
                            break;
                        case (zoomLevel <= 15 && zoomLevel > 14):
                            circle.setRadius(25);
                            break;
                        case (zoomLevel <= 16 && zoomLevel > 15):
                            circle.setRadius(15);
                            break;
                        case (zoomLevel <= 17 && zoomLevel > 16):
                            circle.setRadius(10);
                            break;
                        case (zoomLevel <= 18 && zoomLevel > 17):
                            circle.setRadius(5);
                            break;
                    }
                });
            },
            infoWindowCreator: function (infoContent) {
                return new google.maps.InfoWindow({
                    content: infoContent
                });
            },
            infoWindowClick: function (map, marker, infowindow) {
                return google.maps.event.addListener(marker, 'click', function () {
                    infowindow.open(map, marker);
                });
            },
            infoWindowsClick: function (map, marker, infowindow, infoContent) {
                return google.maps.event.addListener(marker, 'click', (function (marker, infoContent) {
                        return function () {
                            infowindow.setContent(infoContent);
                            infowindow.open(map, marker);
                        };
                    })(marker, infoContent));
            }
        };
    });
