angular.module("AuthApp")
    .controller("mouseMoveCtrl", function ($scope, $location) {
      
    //Mouse Event
    onmousemove = function (e) {("mouse location:", e.clientX, e.clientY)
    $scope.mousex = (e.clientX)}
})