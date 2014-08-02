var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider) {

    $routeProvider
        .when('/', {            
            templateUrl: '/public/views/main.html'
        }).when('/family', {
            templateUrl: '/public/views/family.html',
            controller: 'familyCtrl'
        }).when('/friends', {
            templateUrl: '/public/views/friends.html',
            controller: 'friendsCtrl'
        }).when('/me', {
            templateUrl: '/public/views/me.html',
            controller: 'meCtrl'
        }).when('/me/hobbies', {
            templateUrl: '/public/views/hobbies.html',
            controller: 'hobbiesCtrl'
        });

});