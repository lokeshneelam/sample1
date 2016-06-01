'use strict';

/**
 * @ngdoc function
 * @name sampleapp1App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the sampleapp1App
 */
angular.module('sampleapp1App')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
