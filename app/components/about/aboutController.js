var app = angular.module('app');

app.controller('aboutController', ['$scope' , '$log', '$rootScope', function($scope, $log, $rootScope) {
    $scope.message = 'Hello Fredrik it´s running, tjing on about';


    $scope.listcruises = function(a,b,c) {
        // body...
        $log.warn('gooo');
        $rootScope.$broadcast("listcruisesclicked");
    }
}]);