'use strict';

/**
 * @ngdoc overview
 * @name vtbtApp
 * @description
 * # vtbtApp
 *
 * Main module of the application.
 */

angular
    .module('vtbtApp', ['ngAnimate', 'ngTouch', 'ngRoute'])

    //routing config block
    .config(function ($routeProvider) {

        //Inspired by this tip about resolving data before a route change:
        //http://www.dwmkerr.com/promises-in-angularjs-the-definitive-guide/
        var brewers = function (resolveFactory) {
            return resolveFactory.brewerResolve();
        };
        var weather = function (resolveFactory) {
            return resolveFactory.weatherResolve();
        };
        var dining = function (resolveFactory) {
            return resolveFactory.diningResolve();
        };
        var shopping = function (resolveFactory) {
            return resolveFactory.shoppingResolve();
        };

        $routeProvider
            .when('/', {
                templateUrl: 'views/intro.html',
                resolve: {
                    brewerResolve: brewers
                }
            })
            .when('/brewerlist', {
                templateUrl: 'views/brewer-list.html',
                controller: 'ListBrewerCtrl',
                resolve: {
                    brewerResolve: brewers
                }
            })
            .when('/brewermap', {
                templateUrl: 'views/brewer-statewide-map.html',
                controller: 'BrewerStatewideMapCtrl',
                resolve: {
                    brewerResolve: brewers
                }
            })
            .when('/:selector', {
                templateUrl: 'views/brewer-detail.html',
                controller: 'BrewerDetailCtrl',
                resolve: {
                    brewerResolve: brewers
                }
            })
            .when('/:selector/location', {
                templateUrl: 'views/brewer-detail-map.html',
                controller: 'BrewerMapCtrl',
                resolve: {
                    brewerResolve: brewers
                }
            })
            .when('/:selector/weather', {
                templateUrl: 'views/weather.html',
                controller: 'WeatherCtrl',
                resolve: {
                    weatherResolve: weather
                }
            })
            .when('/:selector/dininglist', {
                templateUrl: 'views/dining-list.html',
                controller: 'ListDiningCtrl',
                resolve: {
                    diningResolve: dining
                }
            })
            .when('/:selector/dininglist/:id', {
                templateUrl: 'views/dining-map.html',
                controller: 'DiningMapCtrl',
                resolve: {
                    brewerResolve: brewers
                }
            })
            .when('/:selector/shoppinglist', {
                templateUrl: 'views/shopping-list.html',
                controller: 'ListShoppingCtrl',
                resolve: {
                    shoppingResolve: shopping
                }
            })
            .when('/:selector/shoppinglist/:id', {
                templateUrl: 'views/shopping-map.html',
                controller: 'ShoppingMapCtrl',
                resolve: {
                    brewerResolve: brewers
                }
            })
            .otherwise({
                redirectTo: '/'
            });
    }) //end routing config block

    .config(function ($locationProvider) {
        $locationProvider.hashPrefix('!');
        // $locationProvider.html5Mode(true);
    })

    .provider('loadingSpinner', function () {
        //Inspired by and courtesy of: http://www.kvetis.com/2014/01/angularjs-loading-widget.html
        //I wish this weren't here, but Angular requires the provider module be instantiated before a config method

        var startListening = [];
        var endListening = [];
        var count = 0;

        // Counter in case of multiple http Requests
        //would like to move this out into a factory, but can't
        var requestCounter = {
            increment: function () {
                count++;
            },
            decrement: function () {
                if (count > 0) {
                    count--;
                }
            },
            getCount: function () {
                return count;
            }
        };

        //Request-Starting Subscription
        this.subscribeOnStart = function (listener) {
            startListening.push(listener);
        };

        //Spread the news to the Provider
        this.fireRequestStarted = function (request) {
            requestCounter.increment();
            angular.forEach(startListening, function (listener) {
                listener(request);
            });
            return request;
        };

        //Request-Ending Subscription
        this.subscribeOnEnd = function (listener) {
            endListening.push(listener);
        };

        //Spread the news to the Provider
        this.fireRequestEnded = function () {
            requestCounter.decrement();
            var passedArgs = arguments;
            angular.forEach(endListening, function (listener) {
                listener.apply(this, passedArgs);
            });
            return arguments[0];
        };

        this.getRequestCount = requestCounter.getCount;

        // Method for Instantiating Service
        this.$get = function () {
            return {
                subscribeOnStart: this.subscribeOnStart,
                fireRequestStarted: this.fireRequestStarted,
                subscribeOnEnd: this.subscribeOnEnd,
                fireRequestEnded: this.fireRequestEnded,
                getRequestCount: this.getRequestCount
            };
        };
    })

    //universal loading spinner config block
    .config(function ($httpProvider, loadingSpinnerProvider) {

        $httpProvider
            .defaults
            .transformRequest
            .push(function (data) {
                loadingSpinnerProvider.fireRequestStarted(data);
                return data;
            });
        $httpProvider
            .defaults
            .transformResponse
            .push(function (data) {
                loadingSpinnerProvider.fireRequestEnded(data);
                return data;
            });
    }) //end universal loading spinner config block

    // This is the key to view transition happiness! i.e scroll to top when view changes
    //Also Google Analytics
    //Courtesy of: http://codepen.io/mike360/pen/kGsvK
    .run(function ($rootScope, $timeout, $window, $location) {
        $rootScope.$on('$routeChangeSuccess', function () {
            ga('send', 'pageview', $location.path());
            $timeout(function () {
                $window.scrollTo(0,0);
            }, 500);
        });
    });
