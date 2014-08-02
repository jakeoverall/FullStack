var myApp = angular.module('myApp');

myApp.controller('friendsCtrl', ['$scope', 'myDataService', function($scope, myDataService) {

    var getFriends = function() {
        myDataService.getFriends().then(function(response) {
            console.log(response);
            $scope.friends = response;
        });
    };

    getFriends();

}]);