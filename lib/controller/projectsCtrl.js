angular.module("AuthApp")
.controller("projectsCtrl", function($scope, $location) {

    $scope.viewChat = function () {
    $location.url('/partials/projects')
    }

})