var myApp = angular.module('myApp');

myApp.controller('hobbiesCtrl', ['$scope', 'myDataService', function ($scope, myDataService) {

    var getHobbies = function () {
        myDataService.getHobbies().then(function (response) {
            console.log(response);
            $scope.hobbies = response;
        });
    };

    getHobbies();

}]);