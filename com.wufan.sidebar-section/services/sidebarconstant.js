'use strict';

/**
 * @ngdoc service
 * @name publicApp.sidebarConstant
 * @description
 * # sidebarConstant
 * Constant in the publicApp.
 */
angular.module('publicApp')
  .constant('sidebarConstant', {
       default:{
         items:["item1","item2","item3","item4"]
       },
      set:{
        items:[]//["制卡券","卡券管理","Ibeacon/摇周边","抽奖"]
      }

  });
