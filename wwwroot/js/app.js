var app = angular.module('imamuApp', ['ngRoute']);

 // configure our routes
app.config(function($routeProvider, $locationProvider) {

        $routeProvider

        // route for the home page
        .when('/', {
            templateUrl : '/templates/home.html',
            controller  : 'HomeController'
        })
        .when('/marketplace', {
            templateUrl : '/templates/marketplace.html',
            controller  : 'HomeController'
        })
        .when('/products', {
            templateUrl : '/templates/products.html',
            controller  : 'HomeController'
        })
        .when('/learn', {
            templateUrl : '/templates/learn.html',
            controller  : 'HomeController'
        })
        .when('/seller', {
            templateUrl : '/templates/seller.html',
            controller  : 'HomeController'
        })
        .when('/product_detail', {
            templateUrl : '/templates/product_detail.html',
            controller  : 'HomeController'
        })
        .when('/yogurt', {
            templateUrl : '/templates/yogurt.html',
            controller  : 'HomeController'
        })
        .when('/cheese', {
            templateUrl : '/templates/cheese.html',
            controller  : 'HomeController'
        })
        .when('/cider', {
            templateUrl : '/templates/cider.html',
            controller  : 'HomeController'
        })
        .when('/kefir', {
            templateUrl : '/templates/kefir.html',
            controller  : 'HomeController'
        })
        .when('/kombucha', {
            templateUrl : '/templates/kombucha.html',
            controller  : 'HomeController'
        })
        .when('/kimchi', {
            templateUrl : '/templates/kimchi.html',
            controller  : 'HomeController'
        })
        .when('/pickles', {
            templateUrl : '/templates/pickles.html',
            controller  : 'HomeController'
        })
        .when('/sauerkraut', {
            templateUrl : '/templates/sauerkraut.html',
            controller  : 'HomeController'
        })
        .when('/tempeh', {
            templateUrl : '/templates/tempeh.html',
            controller  : 'HomeController'
        })
        .otherwise( {redirectTo: '/'});

});

