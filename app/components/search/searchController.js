var app = angular.module('app');

app.controller('searchController', ['$scope', 'searchFilter', function($scope, searchFilter) {
    $scope.message = 'Hello Fredrik it´s running, tjing on search';


    $scope.getToPlaces = function(item) {
       
        var res = searchFilter.getSearchFilterChg(1, 'svSE', true, null, $scope.selectedDestinationItem.RegionId, '2016-01-01' , '2016-05-01', 3, null, null)

        res.then(function(value) {
        	 console.log(value);
        });        
    };

    $scope.productsDataSource = {
              type: "odata",
              serverFiltering: true,
              transport: {
                  read: {
                      url: "http://demos.telerik.com/kendo-ui/service/Northwind.svc/Products",
                  }
              }
          };


          console.log($scope.productsDataSource);

    var searchfilter = searchFilter.getSearchFilterInit();

    searchfilter.then(function(value) {
        console.log(value);
        $scope.gateWays = value.displaygateways;
        $scope.displayDestinations = value.displaydestinations;
        $scope.displaydateFrom = value.displaydatefrom;
        $scope.displaydateTo = value.displatdateto;
        $scope.displayBrands = value.displaybrands;
        $scope.displayPorts = value.displaylocations;


        $scope.selectedGatewayItem = $scope.gateWays[0];
        $scope.selectedDestinationItem = $scope.displayDestinations[0];
        $scope.selectedDateFromItem = $scope.displaydateFrom[0];
        $scope.selectedDateToItem = $scope.displaydateTo[0];
        $scope.selectedBrandItem = $scope.displayBrands[0];
        $scope.selectedPortItem = $scope.displayPorts[0];

        $scope.brandselected = false;

    });
}]);
