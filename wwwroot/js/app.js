var app = angular.module('imamuApp', ['ngRoute']);

 // configure our routes
app.config(function($routeProvider, $locationProvider) {


        $routeProvider

        // route for the home page
        .when('/', {
            templateUrl : '/templates/home.html',
            controller  : 'HomeController'
        })

});

