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
        templateUrl: 'views/simpleview.html',
        controller: 'SimpleviewCtrl'
      })
      .when('/office', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/water', {
        templateUrl: 'views/water.html',
        controller: 'WaterCtrl'
      })
      .when('/solar', {
        templateUrl: 'views/solar.html',
        controller: 'SolarCtrl'
      })
      .when('/power', {
        templateUrl: 'views/power.html',
        controller: 'PowerCtrl'
      })
      .when('/simpleView', {
        templateUrl: 'views/simpleview.html',
        controller: 'SimpleviewCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
