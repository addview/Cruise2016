var app = angular.module('app');

app.factory('searchFilter', function($http, $log, $q) {

    var getSearchFilterInit = function() {
        var deferred = $q.defer();

        $http({
                method: 'GET',
                //url: 'http://xg-kid-wks-004/api/v1/cruises/search?cruiseonly=false&culture=svSE&gateway&destination=9&datefrom=2016-01-01&addmonth=3&brand&port&ship&change=0',
                url: 'http://localhost/api/v1/cruises/search?cruiseonly=false&culture=svSE&gateway&destination=9&datefrom=2016-01-01&dateto=2016-04-01&brand&port&ship&change=0',
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET',
                    'Access-Control-Allow-Headers': 'Content-Type, X-Requested-With',
                    'X-Random-Shit': '123123123',
                    'Content-Type': 'application/json'
                }
            })
            .success(function(data) {
                deferred.resolve(data[0]);
            })
            .error(function(msg, code) {
                console.log("nope");
                $log.error(msg, code);
            });

        return deferred.promise;
    };

    var getSearchFilterChg = function(change, culture, cruiseonly, gateway, destination, datefrom, dateto, brand, port, ship) {
        
        
        var deferred = $q.defer();
        //create url string
        var _cruiseonly = 'cruiseonly=' + cruiseonly;
        var _culture = '&culture=' + culture;
        var _gateway;
        var _destination;
        var _datefrom;
        var _dateto;
        var _brand;
        var _port;
        var _ship;
        var _change = '&change=' + change;

        if (gateway == null) {
            _gateway = '&gateway';
        } else {
            _gateway = '&gateway=' + gateway;
        }

        if (destination == null) {
            _destination = '&destination';
        } else {
            _destination = '&destination=' + destination;
        }

        _datefrom = '&datefrom=' + datefrom;
        _dateto = '&dateto=' + dateto;

        if (brand == null || brand == 0) {
            _brand = '&brand';
        } else {
            _brand = '&brand=' + brand;
        }

         if (port == null || port == 0) {
            _port = '&port';
        } else {
            _port = '&port=' + port;
        }

        if (ship == null || ship == 0) {
            _ship = '&ship';
        } else {
            _ship = '&ship=' + ship;
        }

        //var fixurl = 'http://xg-kid-wks-004/api/v1/cruises/search' +  '?' + _cruiseonly + _culture + _gateway + _destination + _datefrom + _addmonth + _brand + _port + _ship + _change;
        var fixurl = 'http://localhost/api/v1/cruises/search' +  '?' + _cruiseonly + _culture + _gateway + _destination + _datefrom + _dateto + _brand + _port + _ship + _change;
       
        $http({
                method: 'GET',
                url: fixurl,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET',
                    'Access-Control-Allow-Headers': 'Content-Type, X-Requested-With',
                    'X-Random-Shit': '123123123',
                    'Content-Type': 'application/json'
                }
            })
            .success(function(data) {                
                deferred.resolve(data[0]);
            })
            .error(function(msg, code) {
                console.log("nope");
                $log.error(msg, code);
            });

        return deferred.promise;
    };


    return {
        getSearchFilterInit: getSearchFilterInit,
        getSearchFilterChg: getSearchFilterChg
    }
});
