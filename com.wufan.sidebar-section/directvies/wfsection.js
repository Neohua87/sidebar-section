'use strict';

/**
 * @ngdoc directive
 * @name publicApp.directive:wfSection
 * @description
 * # wfSection
 */
angular.module('publicApp')
  .directive('wfSection', function () {
    return {
      transclude:true,
      templateUrl: 'bower_components/com.wufan.sidebar-section/com.wufan.sidebar-section/directvies/wfsection.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {

      }
    };
  });
