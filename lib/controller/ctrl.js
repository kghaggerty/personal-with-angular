angular.module("AuthApp")
.controller("ctrl", function($scope, $location) {
    $location.url('/partials/home')

    $scope.captureCoordinate = function($event){
        $scope.x = $event.offsetX;
        $scope.y = $event.offsetY;
     }

})