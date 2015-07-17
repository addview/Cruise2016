var app = angular.module('app');

app.controller('aboutController', ['$scope' , function($scope) {
    $scope.message = 'Hello Fredrik it´s running, tjing on about';
}]);