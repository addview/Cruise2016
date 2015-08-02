var app = angular.module('app');


app.factory('serlistCruises', ['$http', '$log', '$q', function($http, $log, $q) {

    var getList = function() {
        var deferred = $q.defer();

        $http({
                method: 'GET',
                url: 'http://xg-kid-wks-004/api/v1/cruises/list?agencyid=1&regionid=7&brandid&resourceid&locationid&datefrom=2015-07-01&dateto=2016-01-01&nightmin=1&nightmax=100&culture=svSE&gatewayid',
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET',
                    'Access-Control-Allow-Headers': 'Content-Type, X-Requested-With',
                    'X-Random-Shit': '123123123',
                    'Content-Type': 'application/json'
                }
            })
            .success(function(data) {
                deferred.resolve(data);
            })
            .error(function(msg, code) {
                console.log("nope");
                $log.error(msg, code);
            });

        return deferred.promise;
    };

    return {
        getList: getList      
    }
}]);
