var app = angular.module('imamuApp', ['ngRoute', 'ngAnimate', 'ngNotify']);

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
        .when('/market', {
            templateUrl : '/templates/market_products.html',
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
            templateUrl : '/templates/product_detail.html',
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
            templateUrl : '/templates/product_detail.html',
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
        .when('/market/market_product_detail', {
            templateUrl : '/templates/market_product_detail.html',
            controller  : 'HomeController'
        })
        .when('/market/yogurt', {
            templateUrl : '/templates/market_product_detail.html',
            controller  : 'HomeController'
        })
        .when('/market/cheese', {
            templateUrl : '/templates/market_product_detail.html',
            controller  : 'HomeController'
        })
        .when('/market/cider', {
            templateUrl : '/templates/market_product_detail.html',
            controller  : 'HomeController'
        })
        .when('/market/kefir', {
            templateUrl : '/templates/market_product_detail.html',
            controller  : 'HomeController'
        })
        .when('/market/kombucha', {
            templateUrl : '/templates/market_product_detail.html',
            controller  : 'HomeController'
        })
        .when('/market/kimchi', {
            templateUrl : '/templates/market_product_detail.html',
            controller  : 'HomeController'
        })
        .when('/market/pickles', {
            templateUrl : '/templates/market_product_detail.html',
            controller  : 'HomeController'
        })
        .when('/market/sauerkraut', {
            templateUrl : '/templates/market_product_detail.html',
            controller  : 'HomeController'
        })
        .when('/market/tempeh', {
            templateUrl : '/templates/market_product_detail.html',
            controller  : 'HomeController'
        })
        .when('/sub', {
            templateUrl : '/templates/sub.html',
            controller  : 'HomeController'
        })
        .when('/signup', {
            templateUrl : '/templates/signup.html',
            controller  : 'HomeController'
        })
        .when('/soon', {
            templateUrl : '/templates/soon.html',
            controller  : 'HomeController'
        })
        .when('/gyogurt', {
            templateUrl : '/templates/gyogurt.html',
            controller  : 'HomeController'
        })
        .otherwise( {redirectTo: '/'});

});

