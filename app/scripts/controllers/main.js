'use strict';

/**
 * @ngdoc function
 * @name ilearnerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ilearnerApp
 */
angular.module('ilearnerApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
