'use strict';

/**
 * @ngdoc function
 * @name ilearnerApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ilearnerApp
 */
angular.module('ilearnerApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
