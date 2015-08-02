var app = angular.module('app');

app.controller('testContentController', ['$scope', '$rootScope', function($scope, $rootScope) {

    $scope.time = "(never)";

    $scope.$on("ping", function(e, time) {
        $scope.time = time;
    });

    $scope.$on("cruiseobj", function(e, post) {
        $scope.post = post;
    });


    

    $scope.pong = function() {
        $scope.$emit("pong", new Date());
    };







}]);
