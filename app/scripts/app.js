'use strict';

/**
 * @ngdoc overview
 * @name cwudumApp
 * @description
 * # cwudumApp
 *
 * Main module of the application.
 */
angular
  .module('cwudumApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/water', {
        templateUrl: 'views/water.html',
        controller: 'WaterCtrl'
      })
      .when('/solar', {
        templateUrl: 'views/solar.html',
        controller: 'SolarCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
