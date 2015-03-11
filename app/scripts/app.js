'use strict';

/**
 * @ngdoc overview
 * @name ilearnerApp
 * @description
 * # ilearnerApp
 *
 * Main module of the application.
 */
angular
  .module('ilearnerApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
    .when('/1', {
    templateUrl: 'views/fib.html',
    controller: 'FibCtrl'
  })
  .otherwise({
    redirectTo: '/1'
  });

  });
