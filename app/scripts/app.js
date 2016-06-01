'use strict';

/**
 * @ngdoc overview
 * @name sampleapp1App
 * @description
 * # sampleapp1App
 *
 * Main module of the application.
 */
angular
  .module('sampleapp1App', [
    'ngRoute'
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
