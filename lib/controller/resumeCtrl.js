angular.module("AuthApp")
.controller("resumeCtrl", function($scope, $location) {

    $scope.viewResume = function () {
    $location.url('/partials/resume')
    }


})