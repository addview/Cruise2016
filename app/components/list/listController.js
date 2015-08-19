var app = angular.module('app');

app.controller('listController', ['$scope', '$log', '$rootScope', 'serlistCruises', function($scope, $log, $rootScope, serlistCruises) {
    $scope.message = 'Hello Fredrik it´s running, tjing on list';

    $scope.$on("cruiselistobj", function(e, post) {

        debugger;

        var agencyid = 1;
        var regionid = 7;
        var brandid = null;
        var resourceid = null;
        var locationid = null;
        var datefrom = '2015-07-01';
        var dateto = '2016-01-01';
        var nightmin = 1;
        var nightmax = 100;
        var culture = 'svSE';
        var gatewayid = null;

       

        $scope.listcruises = serlistCruises.getList()
        $scope.listcruises.then(onSuccess, onFailure);

        function onFailure(info) {
            // body...
            $log.warn(info);
        }


        function onSuccess(value) {
        	debugger;
            $scope.listallcruises = value;
        }

        //list cruises
        $scope.post = post;
    });


}]);
