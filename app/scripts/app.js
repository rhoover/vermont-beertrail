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

    //routing config block with resolves
    .config(function ($routeProvider) {

        //Inspired by this tip about resolving data before a route change:
        //http://www.dwmkerr.com/promises-in-angularjs-the-definitive-guide/
        var brewers = function (resolveBrewers) {
            return resolveBrewers.brewers();
        };
        var weather = function (resolveWeather) {
            return resolveWeather.weather();
        };
        var dining = function (resolveDining) {
            return resolveDining.dining();
        };
        var shopping = function (resolveShopping) {
            return resolveShopping.shopping();
        };

        $routeProvider
            .when('/', {
                templateUrl: 'views/home.html'
            })
            .when('/brewerlist', {
                templateUrl: 'views/brewer-list.html',
                controller: 'ListBrewerCtrl',
                controllerAs: 'lbC',
                resolve: {
                    brewers: brewers
                }
            })
            .when('/brewermap', {
                templateUrl: 'views/brewer-statewide-map.html',
                controller: 'BrewerStatewideMapCtrl',
                controllerAs: 'bsmC',
                resolve: {
                    brewers: brewers
                }
            })
            .when('/:selector', {
                templateUrl: 'views/brewer-detail.html',
                controller: 'BrewerDetailCtrl',
                controllerAs: 'bdC',
                resolve: {
                    brewers: brewers
                }
            })
            .when('/:selector/location', {
                templateUrl: 'views/brewer-detail-map.html',
                controller: 'BrewerMapCtrl',
                controllerAs: 'bmC',
                resolve: {
                    brewers: brewers
                }
            })
            .when('/:selector/weather', {
                templateUrl: 'views/weather.html',
                controller: 'WeatherCtrl',
                controllerAs: 'wC',
                resolve: {
                    weather: weather
                }
            })
            .when('/:selector/dininglist', {
                templateUrl: 'views/dining-list.html',
                controller: 'ListDiningCtrl',
                controllerAs: 'ldC',
                resolve: {
                    dining: dining
                }
            })
            .when('/:selector/dininglist/:id', {
                templateUrl: 'views/dining-map.html',
                controller: 'DiningMapCtrl',
                controllerAs: 'dmC',
                resolve: {
                    brewers: brewers
                }
            })
            .when('/:selector/shoppinglist', {
                templateUrl: 'views/shopping-list.html',
                controller: 'ListShoppingCtrl',
                controllerAs: 'lsC',
                resolve: {
                    shopping: shopping
                }
            })
            .when('/:selector/shoppinglist/:id', {
                templateUrl: 'views/shopping-map.html',
                controller: 'ShoppingMapCtrl',
                controllerAs: 'smC',
                resolve: {
                    brewers: brewers
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

    .config(function ($compileProvider) {
        // Courtesy: http://ambikasukla.wordpress.com/2014/10/24/simple-trick-to-speed-up-your-angularjs-app-load-time/
        // Change to false for production
        $compileProvider.debugInfoEnabled(false);
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
