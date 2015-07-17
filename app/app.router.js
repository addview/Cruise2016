var app = angular.module('app');

app.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'app/components/home/homeView.html',
            controller: 'homeController'
        })

        .state('about', {
            url: '/about',
            templateUrl: 'app/components/about/aboutView.html',
            controller: 'aboutController'
        })      
        
});