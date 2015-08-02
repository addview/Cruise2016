var app = angular.module('app');

app.controller('testHeaderController', ['$scope', '$log', '$rootScope', function($scope, $log, $rootScope) {
    $scope.message = 'Hello Fredrik it´s running, tjing on test';    

    $scope.time = "(never)";

    $rootScope.$on("pong", function(e, time){
        $scope.time = time;
    });

   

    $scope.ping = function(){
        $rootScope.$broadcast("ping", new Date());
    };

    var url = 0;

    $scope.cruiseobj = function(){
    	url = url +1;

    	var dd = {
    		first: 'fredrik',
    		last: 'persson',
    		address: 'tröskvägen 6'
    	}

        $rootScope.$broadcast("cruiseobj", dd);
    };




}]);
