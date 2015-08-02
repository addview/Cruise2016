var app = angular.module('app');

app.controller('testController', ['$scope', '$log', '$rootScope', function($scope, $log, $rootScope) {
    $scope.message = 'Hello Fredrik it´s running, tjing on test';
}]);