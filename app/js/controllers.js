angular.module('calendarApp.controllers', [])
    .controller('FrameController', ['$scope', function($scope){
        $scope.today = new Date();
        $scope.name = "Vlad Tutunea";
    }])
    .controller('DashboardController', ['$scope', function($scope) {

    }]);