'use strict';

/**
 * @ngdoc service
 * @name publicApp.sectionConstant
 * @description
 * # sectionConstant
 * Constant in the publicApp.
 */
angular.module('publicApp')
  .constant('sectionConstant', {
      set:{
          views:[],//Array like['views/createcard.html','views/cardmanager.html','views/ibeacon.html','views/card1.html'],
          //viewSelected:0
          title:[]//Araay like["制卡券","卡券管理","Ibeacon/摇周边","抽奖"]

      }


  });
