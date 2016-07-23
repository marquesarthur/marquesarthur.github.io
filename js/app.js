'use strict';
// Declare app level module which depends on views, and components
angular.module('myApp', ['ngRoute', 'ubc', 'ui.router']).
config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home', {
        templateUrl: 'partials/home.html'
    }).when('/about', {
        templateUrl: 'partials/about.html'
    }).when('/publications', {
        templateUrl: 'partials/publications.html'
    }).otherwise({
        redirectTo: '/home'
    });;
}]);