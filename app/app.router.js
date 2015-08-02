var app = angular.module('app');

app.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        // .state('home', {
        //     url: '/home',
        //     templateUrl: 'app/components/home/homeView.html',
        //     controller: 'homeController'
        // })

        .state('home', {
            url: '/home',
            views: {
                '': { templateUrl: 'app/components/home/homeView.html' },
                'columnOne@home': { 
                    templateUrl: 'app/components/search/searchView.html',
                    controller: 'searchController'
                },
                'columnTwo@home': { 
                    templateUrl: 'app/components/list/listView.html',
                    controller: 'listController'
                }
            }
            
        })

        .state('test', {
            url: '/test',
            views: {
                '': { templateUrl: 'app/components/test/testView.html' },
                'columnOne@test': { 
                    templateUrl: 'app/components/test/testViewHeader.html',
                    controller: 'testHeaderController'
                },
                'columnTwo@test': { 
                    templateUrl: 'app/components/test/testViewContent.html',
                    controller: 'testContentController'
                }
            }
        })

        .state('about', {
            url: '/about',
            templateUrl: 'app/components/about/aboutView.html',
            controller: 'aboutController'
        });   
        
});