'use strict';

/**
 * @ngdoc function
 * @name expandtableApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the expandtableApp
 */
angular.module('expandtableApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.userColumns = [{
      text: 'User Code',
      getData: function(data){
        return data.uuid;
      }
    },{
      text: 'User Name',
      iconCls: 'icon-user',
      getData: function(data){
        return data.name;
      }
    },{
      text: 'Phone',
      getData: function(data){
        return data.phone;
      }
    },{
      text: 'Create Date',
      filter: {
        type: 'date',
        format: 'yyyy-MM-dd'
      },
      getData: function(data){
        return data.createDate;
      }
    }];

    $scope.childrenColumns = [{
      text: 'Property',
      getData: function(data){
        return data.property;
      }
    },{
      text: 'Value',
      getData: function(data){
        return data.value;
      }
    }];

    $scope.handlers = {
      'checked': function(item){
        console.log(item);
      },
      'expand': function(){
        
      },
      'close': function(){

      }
    };

    $scope.operation = {
      text: 'Go',
      cls: 'btn btn-info',
      iconCls: 'm-icon-swapright m-icon-white',
      handlers: {
        click: function(item){
          console.log(item);
        }
      }
    };

    // $scope.pagination = {};

    $http.get('json/expand-table.json')
      .success(function(response){
        $scope.store = response;
      })
      .error(function(er){
        console.log(er);
      });
  });
