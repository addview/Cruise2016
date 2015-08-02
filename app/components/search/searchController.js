var app = angular.module('app');

app.controller('searchController', ['$scope', 'searchFilter', '$log', '$rootScope', function($scope, searchFilter, $log,
    $rootScope) {
    $scope.message = 'Hello Fredrik it´s running, on search';

    $scope.$on('$stateChangeSuccess', function() {
        //body on load
        onload();
    });

    
    $scope.cruiseobj = function(){
        //skicka över parametrar till listcontroller
        //url som skall skapas är:
        var i = 0;
       
        var dd = {
            first: 'fredrik',
            last: 'persson',
            address: 'tröskvägen ' + new Date()
        }

        $rootScope.$broadcast("cruiselistobj", dd);
    };

    // // Display a success toast, with a title
    // toastr.success('Have fun storming the castle!', 'Miracle Max Says')

    // // Display an error toast, with a title
    // toastr.error('I do not think that word means what you think it means.', 'Inconceivable!')

    $scope.showgateway = true;

    function onload() {
        $scope.searchfilter = searchFilter.getSearchFilterInit();

        $scope.typofcruise = "FlyandCruise";

        $scope.searchfilter.then(function(value) {

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

            var portIndex = $scope.displayPorts.map(function(el) {
                return el.PortId;
            }).indexOf($scope.selectedIndexArr.Portid);

            var shipIndex = $scope.displayShips.map(function(el) {
                return el.ShipId;
            }).indexOf($scope.selectedIndexArr.Shipid);

            $scope.selectedGatewayItem = $scope.displayGateways[gatewayIndex];
            $scope.selectedDestinationItem = $scope.displayDestinations[destIndex];
            $scope.selectedDateFromItem = $scope.displaydateFrom[0];
            $scope.selectedDateToItem = $scope.displaydateTo[0];
            $scope.selectedBrandItem = $scope.displayBrands[brandIndex];
            $scope.selectedPortItem = $scope.displayPorts[portIndex];
            $scope.selectedShipItem = $scope.displayShips[shipIndex];

            //don´t show any ships if brand not selected
            //$scope.brandselected = false;

        });
    };

    $scope.changeSelection = function(item) {

        var shipId;
        var typeofCruise;
        var gatewayId;

        //$log.warn($scope.typofcruise);

        if ($scope.typofcruise === 'FlyandCruise') {
            typeofCruise = false;
            $scope.showgateway = true;
        } else {
            typeofCruise = true;
            $scope.showgateway = false;
        }

        if ($scope.selectedShipItem === null) {
            shipId = 0;
        } else {
            shipId = $scope.selectedShipItem.ShipId;
        }


        if ($scope.selectedGatewayItem === null) {
            gatewayId = 0;
        } else {
            gatewayId = $scope.selectedGatewayItem.GateWayId;
        }



        if ($scope.selectedDestinationItem.RegionId === 0) {
            $scope.showport = false;
        } else {
            $scope.showport = true;
        }

        function onFailure(info) {
            // body...
        }


        function onSuccess(value) {
            //$log.info(value);



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

            var fromIndex = $scope.displaydateFrom.map(function(el) {
                return el.DateId;
            }).indexOf($scope.selectedIndexArr.DepDateFrom);

            if (fromIndex == -1) {
                fromIndex = 0;
            }

            var toIndex = $scope.displaydateTo.map(function(el) {
                return el.DateId;
            }).indexOf($scope.selectedIndexArr.DepDateTo);

            if (toIndex == -1) {
                toIndex = 0;
            }

            var gatewayIndex;

            if ($scope.displayGateways === null) {
                gatewayIndex = 0;
            } else {
                gatewayIndex = $scope.displayGateways.map(function(el) {
                    return el.GateWayId;
                }).indexOf($scope.selectedIndexArr.GatewayId);
            }

            var brandIndex = $scope.displayBrands.map(function(el) {
                return el.BrandId;
            }).indexOf($scope.selectedIndexArr.Brandid);

            if ($scope.displayShips != null) {
                var shipIndex = $scope.displayShips.map(function(el) {
                    return el.ShipId;
                }).indexOf($scope.selectedIndexArr.Shipid);
            }

            if (typeof shipIndex === "undefined") {
                shipIndex = 0;
            }

            var portIndex = $scope.displayPorts.map(function(el) {
                return el.PortId;
            }).indexOf($scope.selectedIndexArr.Portid);


            if ($scope.displayGateways != null) {
                $scope.selectedGatewayItem = $scope.displayGateways[gatewayIndex];
            }

            $scope.selectedDestinationItem = $scope.displayDestinations[destIndex];
            $scope.selectedDateFromItem = $scope.displaydateFrom[fromIndex];
            $scope.selectedDateToItem = $scope.displaydateTo[toIndex];
            $scope.selectedBrandItem = $scope.displayBrands[brandIndex];
            $scope.selectedPortItem = $scope.displayPorts[portIndex];


            //don´t show any ships if brand not selected
            if (brandIndex != null && brandIndex != 0) {
                $scope.selectedShipItem = $scope.displayShips[shipIndex];
                $scope.brandselected = true;
            } else {
                $scope.brandselected = false;
            }
        }

        $scope.searchfilter = searchFilter.getSearchFilterChg(item, 'svSE', typeofCruise, gatewayId, $scope.selectedDestinationItem.RegionId,
            $scope.selectedDateFromItem.DateId, $scope.selectedDateToItem.DateId, $scope.selectedBrandItem.BrandId, $scope.selectedPortItem.PortId, shipId)
        $scope.searchfilter.then(onSuccess, onFailure);
    };

}]);
