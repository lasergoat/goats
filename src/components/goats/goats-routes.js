
angular.module('goatsApp.goatsRoutes', [])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/goats');

    $stateProvider
        .state('goats', {
            url: '/goats',
            resolve: {
                goats: ['goatsService', function(goatsService) {
                    return goatsService.getGoats();
                }],
                goat: function() { return {}; }
            },
            templateUrl: 'src/components/goats/views/goats.html',
            controller: 'goatsCtrl',
            controllerAs: 'goats'
        })

        .state('search', {
            url: '/goats/search/:query',
            resolve: {
                goats: ['$stateParams', 'goatsService', function($stateParams, goatsService) {
                    return goatsService.searchGoats($stateParams.query);
                }],
                goat: function() { return {}; }
            },
            templateUrl: 'src/components/goats/views/goats.html',
            controller: 'goatsCtrl',
            controllerAs: 'goats'
        })

        .state('goat', {
            url: '/goats/:name',
            resolve: {
                goats: function() { return []; },
                goat: ['$stateParams', 'goatsService', function($stateParams, goatsService) {
                    return goatsService.getGoat($stateParams.name);
                }]
            },
            templateUrl: 'src/components/goats/views/goats.edit.html',
            controller: 'goatsCtrl',
            controllerAs: 'goats'
        });
}])