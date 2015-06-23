'use strict';

/**
 * @ngdoc overview
 * @name expandtableApp
 * @description
 * # expandtableApp
 *
 * Main module of the application.
 */
angular
  .module('expandtableApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'expandTable'
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
      .otherwise({
        redirectTo: '/'
      });
  });
