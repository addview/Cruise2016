var app = angular.module('app');

app.controller('searchController', ['$scope', 'searchFilter', function($scope, searchFilter) {
    $scope.message = 'Hello Fredrik it´s running, tjing on search';

    $scope.startSpin = function(){
        usSpinnerService.spin('spinner-1');
    }
    $scope.stopSpin = function(){
        usSpinnerService.stop('spinner-1');
    }

    $scope.getToPlaces = function(item) {

        var res = searchFilter.getSearchFilterChg(1, 'svSE', true, null, $scope.selectedDestinationItem.RegionId, '2016-01-01', '2016-05-01', 3, null, null)

        res.then(function(value) {
            console.log(value);
        });
    };

    $scope.typofcruiseChange = function(e) {
        var id = e.sender.value();
    }

    $scope.gatewayChange = function(e) {
        var id = e.sender.value();
    }

    $scope.regionChange = function(e) {
        var id = e.sender.value();
    }

    $scope.datefromChange = function(e) {
        var id = e.sender.value();
    }

    $scope.datetoChange = function(e) {
        var id = e.sender.value();
    }

    $scope.brandChange = function(e) {
        var id = e.sender.value();
    }

    $scope.portChange = function(e) {
        var id = e.sender.value();
    }

    $scope.shipChange = function(e) {
        var id = e.sender.value();
    }


    //console.log($scope.productsDataSource);

    $scope.searchfilter = searchFilter.getSearchFilterInit();

    $scope.searchfilter.then(function(value) {
        console.log(value);
        $scope.gateWays = value.displaygateways;
        $scope.displayDestinations = value.displaydestinations;
        $scope.displaydateFrom = value.displaydatefrom;
        $scope.displaydateTo = value.displatdateto;
        $scope.displayBrands = value.displaybrands;



        $scope.displayPorts = value.displaylocations;

        $scope.destinationsDataSource = value.displaydestinations;


        $scope.selectedGatewayItem = $scope.gateWays[0];
        $scope.selectedDestinationItem = $scope.displayDestinations[0];
        $scope.selectedDateFromItem = $scope.displaydateFrom[0];
        $scope.selectedDateToItem = $scope.displaydateTo[0];
        $scope.selectedBrandItem = $scope.displayBrands[0];
        $scope.selectedPortItem = $scope.displayPorts[0];

        $scope.brandselected = false;

    });
}]);
