angular.module('Goats')
.controller('GoatsController', ['$scope', '$http', function($scope, $http) {
    $scope.goat = null;

    $scope.editingGoat = false;

    $scope.goatQuery = null;

    $scope.goats = [];

    $scope.editGoat = function(goat) {
        $scope.goat = goat;
        $scope.editingGoat = true;
    };

    $scope.saveGoat = function() {
        $http.post('/goats', $scope.goat)
            .then(function() {
                $http.get('/goats')
                    .then(function(response) {
                        $scope.goat = null;
                        $scope.goats = response.data;
                        $scope.editingGoat = false;
                    });
            });
    };

    $scope.cancelGoat = function() {
        $scope.editingGoat = false;
    };

    $scope.searchGoats = _.debounce(function(query) {
        $http.get('/goats/search/' + query)
            .then(function(response) {
                $scope.goats = response.data;
            });
    }, 300);

    $http.get('/goats')
        .then(function(response) {
            $scope.goats = response.data;
        });
}]);