var myApp = angular.module('myApp');

myApp.controller('mainCtrl', ['$scope', function($scope) {
    $scope.nav = [{        
        'name': 'About Me',
        'url': '/me'
    }, {
        'name': 'My Hobbies',
        'url': '/me/hobbies'
    }, {
        'name': 'My Family',
        'url': '/family'
    }, {
        'name': 'My Friends',
        'url': '/friends'
    }];
}]);