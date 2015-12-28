/**
 *
 * Created by wufan on 15/12/27.
 */
angular.module('publicApp')
    .controller('YourCtrl', function ($scope,$location,sidebarConstant,sectionConstant) {

        //set title and section in the wf-section

        $scope.section={};
        $scope.section.title = sectionConstant.title[0];
        $scope.section.views=sectionConstant.views;
        //console.log("section.views:"+$scope.section.views);
        $scope.sectionSelected = function (index) {
            //console.log("index in sectionSelected:" + index);
            $scope.section.viewId = index;
            //console.log("section.viewId:"+$scope.section.viewId);
            $scope.section.title = sectionConstant.title[index];

            var path=$scope.section.views[index].slice(6,-5);
            console.log("path:"+path);
            $location.path(path);

        }



    });