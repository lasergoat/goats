angular.module('Goats', ['ngAnimate', 'ui.router', 'ngMockE2E'])
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('goats', {
            url: '/goats',
            resolve: {
                goats: ['GoatsService', function(GoatsService) {
                    return GoatsService.getGoats();
                }],
                goat: function() { return {}; }
            },
            templateUrl: 'src/components/goats/views/goats.html',
            controller: 'GoatsController',
            controllerAs: 'goats'
        })

        .state('search', {
            url: '/goats/search/:query',
            resolve: {
                goats: ['$stateParams', 'GoatsService', function($stateParams, GoatsService) {
                    return GoatsService.searchGoats($stateParams.query);
                }],
                goat: function() { return {}; }
            },
            templateUrl: 'src/components/goats/views/goats.html',
            controller: 'GoatsController',
            controllerAs: 'goats'
        })

        .state('goat', {
            url: '/goats/:name',
            resolve: {
                goats: function() { return []; },
                goat: ['$stateParams', 'GoatsService', function($stateParams, GoatsService) {
                    return GoatsService.getGoat($stateParams.name);
                }]
            },
            templateUrl: 'src/components/goats/views/goats.edit.html',
            controller: 'GoatsController',
            controllerAs: 'goats'
        });
}])