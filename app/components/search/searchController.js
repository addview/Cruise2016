var app = angular.module('app');

app.controller('searchController', ['$scope', 'searchFilter', function($scope, searchFilter) {
    $scope.message = 'Hello Fredrik it´s running, on search';

    $scope.$on('$stateChangeSuccess', function() {
        //body on load
        onload();

    });


    function onload() {
        $scope.searchfilter = searchFilter.getSearchFilterInit();

        $scope.searchfilter.then(function(value) {
            console.log(value);
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

    $scope.changeSelection = function(item) {

        $scope.searchfilter = searchFilter.getSearchFilterChg(item, 'svSE', false, $scope.selectedGatewayItem.GateWayId, $scope.selectedDestinationItem.RegionId,
            $scope.selectedDateFromItem.DateId, 3, $scope.selectedBrandItem.BrandId, $scope.selectedPortItem.PortId, null)
        $scope.searchfilter.then(function(value) {

            console.log(value);

            $scope.displayDestinations = value.displaydestinations;
            $scope.displaydateFrom = value.displaydatefrom;
            $scope.displaydateTo = value.displaydateto;
            $scope.displayBrands = value.displaybrands;
            $scope.displayPorts = value.displaylocations;
            $scope.displayGateways = value.displaygateways
            $scope.displayShips = value.displayresources;

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

            if ($scope.displayShips != null) {
                var shipIndex = $scope.displayShips.map(function(el) {
                    return el.ShipId;
                }).indexOf($scope.selectedIndexArr.Shipid);
            }


            var portIndex = $scope.displayPorts.map(function(el) {
                return el.PortId;
            }).indexOf($scope.selectedIndexArr.Portid);

            $scope.selectedGatewayItem = $scope.displayGateways[gatewayIndex];
            $scope.selectedDestinationItem = $scope.displayDestinations[destIndex];
            $scope.selectedDateFromItem = $scope.displaydateFrom[0];
            $scope.selectedDateToItem = $scope.displaydateTo[0];
            $scope.selectedBrandItem = $scope.displayBrands[brandIndex];
            $scope.selectedPortItem = $scope.displayPorts[portIndex];

            if ($scope.displayShips != null) {
                $scope.selectedShipItem = $scope.displayShips[shipIndex];
            }


            //don´t show any ships if brand not selected
            if (brandIndex != null || brandIndex != 0) {
                $scope.brandselected = true;
            } else {
                $scope.brandselected = false;
            }


        });
    };

    // $scope.dropchange = function(e) {
    //     $scope.dropchange = e.sender.value();
    // }

    // $scope.gatewayChange = function(e) {
    //     var id = e.sender.value();
    // }

    // $scope.regionChange = function(e) {
    //     var id = e.sender.value();
    // }

    // $scope.datefromChange = function(e) {
    //     var id = e.sender.value();
    // }

    // $scope.datetoChange = function(e) {
    //     var id = e.sender.value();
    // }

    // $scope.brandChange = function(e) {
    //     var id = e.sender.value();
    // }

    // $scope.portChange = function(e) {
    //     var id = e.sender.value();
    // }

    // $scope.shipChange = function(e) {
    //     var id = e.sender.value();
    // }


}]);
