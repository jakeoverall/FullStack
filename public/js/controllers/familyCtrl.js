var myApp = angular.module('myApp');

myApp.controller('familyCtrl', ['$scope', 'myDataService', function ($scope, myDataService) {

    var getFamily = function () {
        myDataService.getFamily().then(function (response) {
            console.log(response);
            $scope.family = response;
        });
    };

    getFamily();

}]);