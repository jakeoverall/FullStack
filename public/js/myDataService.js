var myApp = angular.module('myApp');

myApp.service('myDataService', function($http) {
    this.getFriends = function() {
        return $http({ 'method': 'GET', 'url': 'http://localhost:8080/friends' }).then(function(response) {
            return response.data;
        });
    };
    
    this.getMe = function () {
        return $http({ 'method': 'GET', 'url': 'http://localhost:8080/me' }).then(function (response) {
            return response.data;
        });
    };
    
    this.getHobbies = function () {
        return $http({ 'method': 'GET', 'url': 'http://localhost:8080/me/hobbies' }).then(function (response) {
            return response.data;
        });
    };
    
    this.getFamily = function () {
        return $http({ 'method': 'GET', 'url': 'http://localhost:8080/family' }).then(function (response) {
            return response.data;
        });
    };
});