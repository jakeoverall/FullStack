var myApp = angular.module('myApp');

myApp.controller('meCtrl', ['$scope', 'myDataService', function ($scope, myDataService) {

    var getMe = function () {
        myDataService.getMe().then(function (response) {
            console.log(response);
            $scope.me = response;
        });
    };

    getMe();

}]);