'use strict';

/**
 * @ngdoc function
 * @name expandtableApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the expandtableApp
 */
angular.module('expandtableApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.options = {
      url: '/fileupload'
    };
  });
