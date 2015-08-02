var app = angular.module('app');

app.service('sharedProperties', function () {
        var property;
        debugger;
        return {
            getProperty: function () {
                return property;
            },
            setProperty: function(value) {
                debugger;
                property = value;
            }
        };
    });

app.factory('Service', function() {
  var Service = {
    foo: 'Shared service'
  };
  return Service;
});