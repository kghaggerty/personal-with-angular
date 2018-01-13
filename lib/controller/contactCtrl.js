angular.module("AuthApp")
.controller("contactCtrl", function($scope, $location) {

    $scope.viewChat = function () {
    $location.url('/partials/contact')
    }

})