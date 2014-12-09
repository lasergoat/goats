describe("Goats: goatsCtrl", function () {

    var $scope, 
        $rootScope, 
        $stateParams, 
        $state, 
        $q, 
        goats,
        goat;

    goats = [
        {
            name: 'Alpine',
            image: '//upload.wikimedia.org/wikipedia/commons/thumb/9/91/Chevres_alpines_au_paturage_en_region_Centre.jpg/85px-Chevres_alpines_au_paturage_en_region_Centre.jpg',
            alt: '---',
            origin: 'French Alps',
            purpose: 'Milk'
        },
        {
            name: 'Altai Mountain',
            image: '---',
            alt: '---',
            origin: 'Altai Republic',
            purpose: 'Fiber'
        },
        {
            name: 'American Lamancha',
            image: '//upload.wikimedia.org/wikipedia/en/thumb/7/7e/Tortuga_ADGA_Natl_Show_2006.jpg/85px-Tortuga_ADGA_Natl_Show_2006.jpg',
            alt: 'Lamancha, LaMancha',
            origin: 'Oregon',
            purpose: 'Milk'
        }
    ];

    goat = {
        name: 'Alpine',
        image: '//upload.wikimedia.org/wikipedia/commons/thumb/9/91/Chevres_alpines_au_paturage_en_region_Centre.jpg/85px-Chevres_alpines_au_paturage_en_region_Centre.jpg',
        alt: '---',
        origin: 'French Alps',
        purpose: 'Milk'
    };

    beforeEach(function() {

        module('App');
        module('templates');

        module(function($provide) {

            $provide.value('goatsService', goatsService = {});

        });

    });

    beforeEach(inject(function(_$rootScope_, _$controller_, _$stateParams_, _$state_, _$q_) {

        $scope                  = _$rootScope_;
        $stateParams            = _$stateParams_;
        $state                  = _$state_;
        $q                      = _$q_;

        goatCreateController = function() {

            return _$controller_(
                'goatsCtrl', 
                {
                    '$state' : $state,
                    'goat'   : {
                        data:{}
                    },
                    'goats'  : goats,
                }
            );
        };

        goatEditController = function() {
            return _$controller_(
                'goatsCtrl', 
                {
                    '$state' : $state,
                    'goat'   : {
                        data:goat
                    },
                    'goats'  : [],
                }
            );
        };

        goatSearchController = function() {
            return _$controller_(
                'goatsCtrl', 
                {
                    '$state' : $state,
                    'goat'   : {
                        data:{}
                    },
                    'goats'  : goats,
                }
            );
        };
    }));

    it('should initialize self.goat with the goat passed in', function() {

        var controller = goatEditController();

        expect(controller.goat).toEqual(goat);

    });

    it('should initialize self.goatQuery with the stateParam passed in', function() {

        $state.params.query = 'TEST';

        var controller = goatEditController();

        expect(controller.goatQuery).toEqual('TEST');

    });

    it('should initialize self.goats with the resolved data passed in', function() {

        var controller = goatEditController();

        expect(controller.goats).toEqual(goats.data);

    });

    it('should save a goat when edited', function() {

        var controller = goatEditController();

        var saveGoatDefer = $q.defer();

        saveGoatDefer.resolve();

        goatsService.saveGoat = jasmine.createSpy('saveGoat').andReturn(saveGoatDefer.promise);

        spyOn($state, 'go').andCallFake(function(state, params) {});

        var result = controller.saveGoat();

        // if digest isn't here, angular can't process the changes
        // and karma won't think state.go got called
        $scope.$digest();

        expect($state.go).toHaveBeenCalledWith('goats');
        expect(goatsService.saveGoat).toHaveBeenCalledWith(controller.goat);

    });

});