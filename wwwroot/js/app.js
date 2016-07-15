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
        .otherwise( {redirectTo: '/'});


        $locationProvider.html5Mode({
		  enabled: true,
		  requireBase: false
		});

});

