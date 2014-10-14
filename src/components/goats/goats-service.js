angular.module('Goats')
.service('GoatsService', ['$http', function($http) {
    var self = this;

    self.saveGoat = function(goat) {
        return $http.post('/goats', goat);
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