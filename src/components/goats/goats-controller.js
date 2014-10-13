angular.module('Goats')
.controller('GoatsController', ['GoatsService', function(GoatsService) {
    var self = this;

    self.goat = null;

    self.editingGoat = false;

    self.goatQuery = null;

    self.goats = [];

    self.editGoat = function(goat) {
        self.goat = goat;
        self.editingGoat = true;
    };

    self.saveGoat = function() {
        GoatsService.saveGoat(self.goat)
            .then(function() {
                GoatsService.getGoats()
                    .then(function(response) {
                        self.goat = null;
                        self.goats = response.data;
                        self.editingGoat = false;
                    });
            });
    };

    self.cancelGoat = function() {
        self.editingGoat = false;
    };

    self.searchGoats = _.debounce(function(query) {
        GoatsService.searchGoats(query)
            .then(function(response) {
                self.goats = response.data;
            });
    }, 300);

    GoatsService.getGoats()
        .then(function(response) {
            self.goats = response.data;
        });
}]);