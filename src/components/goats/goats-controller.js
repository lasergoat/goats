angular.module('Goats')
.controller('GoatsController', ['$state', 'GoatsService', 'goats', 'goat', function($state, GoatsService, goats, goat) {
    var self = this;

    self.goat = goat.data;

    self.goatQuery = $state.params.query;

    self.goats = goats.data;

    self.saveGoat = function() {
        GoatsService.saveGoat(self.goat)
            .then(function() {
                $state.go('goats');
            })
    };

    self.searchGoats = _.debounce(function(query) {
        if (!query.length) return $state.go('goats');

        $state.go('search', {query: query});
    }, 300);
}]);