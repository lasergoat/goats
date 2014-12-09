
angular.module('goatsApp.goatsService', [])

.service('goatsService', ['$http', function($http) {
    var self = this;

    self.saveGoat = function(goat) {
        return $http.put('/goats', goat);
    };

    self.searchGoats = function(query) {
        return $http.get('/goats/search/' + query);
    };

    self.getGoats = function() {
        return $http.get('/goats');
    };

    self.getGoat = function(name) {
        return $http.get('/goat/' + name);
    };
}]);