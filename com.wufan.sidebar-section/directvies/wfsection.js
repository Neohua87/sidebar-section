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
      templateUrl: '/scripts/directives/wfsection.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {

      }
    };
  });
