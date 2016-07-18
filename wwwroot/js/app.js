var app = angular.module('imamuApp', ['ngRoute', 'ngAnimate']);

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
        .when('/products/product_detail', {
            templateUrl : '/templates/product_detail.html',
            controller  : 'HomeController'
        })
        .when('/products/yogurt', {
            templateUrl : '/templates/product_detail.html',
            controller  : 'HomeController'
        })
        .when('/products/cheese', {
            templateUrl : '/templates/cheese.html',
            controller  : 'HomeController'
        })
        .when('/products/cider', {
            templateUrl : '/templates/product_detail.html',
            controller  : 'HomeController'
        })
        .when('/products/kefir', {
            templateUrl : '/templates/product_detail.html',
            controller  : 'HomeController'
        })
        .when('/products/kombucha', {
            templateUrl : '/templates/kombucha.html',
            controller  : 'HomeController'
        })
        .when('/products/kimchi', {
            templateUrl : '/templates/product_detail.html',
            controller  : 'HomeController'
        })
        .when('/products/pickles', {
            templateUrl : '/templates/product_detail.html',
            controller  : 'HomeController'
        })
        .when('/products/sauerkraut', {
            templateUrl : '/templates/product_detail.html',
            controller  : 'HomeController'
        })
        .when('/products/tempeh', {
            templateUrl : '/templates/product_detail.html',
            controller  : 'HomeController'
        })
        .otherwise( {redirectTo: '/'});

});

