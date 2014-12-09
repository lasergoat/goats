
angular.module('goatsApp.goatsCtrl', [])

.controller('goatsCtrl', ['$state', 'goatsService', 'goats', 'goat', function($state, goatsService, goats, goat) {

    var self = this;

    self.goat = goat.data;

    self.goatQuery = $state.params.query;

    self.goats = goats.data;

    self.saveGoat = function() {

        goatsService.saveGoat(self.goat)
            .then(function() {
                $state.go('goats');
            })
    };

    // for unit testing, this function needs to be "public"
    // so it can be tested. right now, it's anonomous
    // as a _.debounce() argument and can't be accessed by a test
    self.searchGoats = _.debounce(function(query) {
        if (!query.length) return $state.go('goats');

        $state.go('search', {query: query});
    }, 300);

}]);