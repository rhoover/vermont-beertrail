'use strict';

/**
 * @ngdoc function
 * @name vtbtApp.controller:HomeBodyCtrl
 * @description
 * # HomeBodyCtrl
 * Controller of the vtbtApp
 */

angular
    .module('vtbtApp')
    .controller('HomeBodyCtrl', function ($scope, $location, $timeout) {

        $timeout(function () {
            $scope.isHome = function (route) {
                return route === $location.path();
            };
        }, 500);

    });
