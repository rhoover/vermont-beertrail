'use strict';

/**
 * @ngdoc service
 * @name vtbtApp.roundingNumbers
 * @description
 * # roundingNumbers
 * Service in the vtbtApp.
 */

angular
    .module('vtbtApp')
    .factory('roundingNumbers', function () {

        return {
            roundNumber: function (number) {
                var rounded = Math.round(number);
                return rounded;
            }
        };

    });
