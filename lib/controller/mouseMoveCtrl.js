angular.module("AuthApp")
    .controller("mouseMoveCtrl", function ($scope, $location) {
    // //Mouse Event
    $scope.captureCoordinate = function($event){
        $scope.x = $event.offsetX;
        $scope.y = $event.offsetY;
        console.log($event)
     }
})