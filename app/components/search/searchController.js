var app = angular.module('app');

app.controller('searchController', ['$scope', 'searchFilter', function($scope, searchFilter) {
    $scope.message = 'Hello Fredrik it´s running, tjing on search';

    $scope.$on('$stateChangeSuccess', function() {
        //body on load
        onload();

    });

    function onload() {
        $scope.searchfilter = searchFilter.getSearchFilterInit();

        $scope.searchfilter.then(function(value) {
            console.log(value);
            //$scope.gateWays = value.displaygateways;
            $scope.displayDestinations = value.displaydestinations;
            $scope.displaydateFrom = value.displaydatefrom;
            $scope.displaydateTo = value.displaydateto;
            $scope.displayBrands = value.displaybrands;
            $scope.displayPorts = value.displaylocations;
            $scope.displayGateways = value.displaygateways

            

            $scope.selectedIndexArr = value.selectedindex;


            var destIndex = $scope.displayDestinations.map(function(el) {
                return el.RegionId;
            }).indexOf($scope.selectedIndexArr.DestinationId);

            var gatewayIndex = $scope.displayGateways.map(function(el) {
                return el.GateWayId;
            }).indexOf($scope.selectedIndexArr.GatewayId);

            var brandIndex = $scope.displayBrands.map(function(el) {
                return el.BrandId;
            }).indexOf($scope.selectedIndexArr.Brandid);

            var portIndex = $scope.displayPorts.map(function(el) {
                return el.PortId;
            }).indexOf($scope.selectedIndexArr.Portid);



            $scope.selectedGatewayItem = $scope.displayGateways[gatewayIndex];
            $scope.selectedDestinationItem = $scope.displayDestinations[destIndex];
            $scope.selectedDateFromItem = $scope.displaydateFrom[0];
            $scope.selectedDateToItem = $scope.displaydateTo[0];
            $scope.selectedBrandItem = $scope.displayBrands[brandIndex];
            $scope.selectedPortItem = $scope.displayPorts[portIndex];


            //don´t show any ships if brand not selected
            $scope.brandselected = false;

        });
    };

    $scope.changeSelection = function(item)
    {
    	console.log(item);
    };



    $scope.getToPlaces = function(item) {

        var res = searchFilter.getSearchFilterChg(1, 'svSE', true, null, $scope.selectedDestinationItem.RegionId, '2016-01-01', '2016-05-01', 3, null, null)

        res.then(function(value) {
            console.log(value);
        });
    };

    $scope.dropchange = function(e) {
        $scope.dropchange = e.sender.value();
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


}]);
