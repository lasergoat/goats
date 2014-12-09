
angular.module('goatsApp.goatsCtrl', [])

.controller('goatsCtrl', ['$state', 'goatsService', 'goats', 'goat', function($state, goatsService, goats, goat) {

    var self = this;

    self.goat = goat.data;

    self.goatQuery = $state.params.query;

    self.goats = goats.data;

    self.saveTheGoat = function() {
        goatsService.saveGoat(self.goat)
            .then(function() {
                $state.go('goats');
            })
    };

    self.searchGoats = _.debounce(function(query) {
        if (!query.length) return $state.go('goats');

        $state.go('search', {query: query});
    }, 300);
}]);