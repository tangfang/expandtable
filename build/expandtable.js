'use strict';

/**
 * @name expandTable.directive:expandTable
 * @type {directive}
 * @desc An extended AngularJS Directive Expanded Table with expand row, pagination, and other added features. (supports twitter bootstrap v3).
 */
angular.module('expandTable', []);
angular.module('expandTable')
  .directive('expandTable', function () {
    return {
      templateUrl: 'bower_components/expandtable/src/expandtable.html',
      restrict: 'E',
      scope: {
        columns: '=columns',
        childrenColumns: '=childrenColumns',
        store: '=store',
        pagination: '=pagination',
        operation: '=operation'
      },
      link: function postLink(scope) {
        function createChildrenTable(childs){
          var table = angular.element('<table />');
          table.addClass('table table-striped table-bordered table-hover');
          var thead = angular.element('<thead />');
          var theadTr = angular.element('<tr />');
          thead.append(theadTr);
          
          for(var i = 0; i < scope.childrenColumns.length; i++){
            var children = scope.childrenColumns[i];
            var th = angular.element('<th />');
            th.html(children.text);
            theadTr.append(th);
          }
          var tbody = angular.element('<tbody />');
          for(var n = 0; n < childs.length; n++){
            var childTr = angular.element('<tr />');
            tbody.append(childTr);
            angular.forEach(childs[n], function(value){
              var childTd = angular.element('<td />');
              childTd.html(value);
              childTr.append(childTd);
            });

          }
          table.append(thead).append(tbody);
          return table;
        }

        scope.expandclose = function(e, d){
          var tr = angular.element(e.target).parent().parent();
          var rowIndex = tr[0].sectionRowIndex;
          if(d.expand === undefined){
            d.expand = true;
          }else{
            d.expand = !d.expand;
          }
          if(d.expand){
            angular.element(e.target).addClass("row-details-open").removeClass("row-details-close");
            var createTr = angular.element('<tr />').append(angular.element('<td />'));
            var createTd = angular.element('<td />').attr('colspan', scope.columns.length);
            createTr.append(createTd);
            createTd.append(createChildrenTable(d.children));
            tr.after(createTr);
          }else{
            angular.element(e.target).addClass("row-details-close").removeClass("row-details-open");
            tr.next().remove();
          }
        };

        scope.expandclose2 = function(e, d){
          if(d.expand === undefined){
            d.expand = true;
          }else{
            d.expand = !d.expand;
          }
          if(d.expand){
            angular.element(e.target).addClass("row-details-open").removeClass("row-details-close");
            
          }else{
            angular.element(e.target).addClass("row-details-close").removeClass("row-details-open");
          }
        };
      }
    };
  });

angular.module('expandTable')
  .directive('expandTableChildNode', function (){
    return {
      templateUrl: 'bower_components/expandtable/src/expandtablechildnode.html',
      restrict: 'E',
      replace: true,
      scope: {
        columns: '=columns',
        childrenColumns: '=childrenColumns'
        // store: '=store',
        // pagination: '=pagination',
        // operation: '=operation'
      },
      link: function postLink(scope) {
        
      }
    };
  });
