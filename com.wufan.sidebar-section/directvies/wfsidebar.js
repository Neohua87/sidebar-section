'use strict';

/**
 * @ngdoc directive
 * @name publicApp.directive:wfSidebar
 * @description
 * # WFsidebar
 */
angular.module('publicApp')
  .directive('wfSidebar', function (sidebarConstant) {
    return {
      templateUrl: 'bower_components/com.wufan.sidebar-section/com.wufan.sidebar-section/directvies/wfsidebar.html',
      restrict: 'E',
      scope: {
        items:'=',
        sectionSelected:'&'

      },
      link: function postLink(scope, element, attrs) {
        scope.$watch('items', function(value) {
          //console.log(value);
          scope.items=value||sidebarConstant.set.items||sidebarConstant.default.items;

        });
        scope.isSelected=function(index){
          //console.log(index);
          scope.sectionSelected({index:index});
        }


      }

    };
  });
