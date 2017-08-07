"use strict";
console.log("app.js");

const app = angular.module('Me', ['ngRoute']);

app.config( ($routeProvider) => {

    $routeProvider
    .when('/', {
        templateUrl: '/partials/home.html',
        controller: 'HomeViewCtrl'
    })
    .when('/blog', {
        templateUrl: '/partials/blogView.html',
        controller: 'BlogView'
    })
    .when('/status', {
        templateUrl: '/partials/currentStatus.html',
        controller: 'CurrentStatus'
    })
    .otherwise('/');

} );