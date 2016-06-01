'use strict';

/**
 * @ngdoc function
 * @name sampleapp1App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sampleapp1App
 */
angular.module('sampleapp1App')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
