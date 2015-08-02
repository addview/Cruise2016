var app = angular.module('app');

app.controller('listController', ['$scope', '$log', '$rootScope', function($scope, $log, $rootScope) {
    $scope.message = 'Hello Fredrik it´s running, tjing on list';

    $scope.$on("listcruisesclicked", function(event) {
    	debugger;
       
    });

}]);
