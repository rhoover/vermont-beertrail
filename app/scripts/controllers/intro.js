'use strict';

/**
 * @ngdoc function
 * @name vtbtApp.controller:IntroCtrl
 * @description
 * # IntroCtrl
 * Controller of the vtbtApp
 */

angular
    .module('vtbtApp')
    .controller('IntroCtrl', function ($scope, $location, analyticsGoogle) {
        analyticsGoogle.logPageLoad($scope, $location.absUrl(), $location.path());
    });
