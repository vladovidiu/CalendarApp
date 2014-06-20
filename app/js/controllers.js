angular.module('calendarApp.controllers', [])
    .controller('FrameController', ['$scope', function($scope){
        $scope.today = new Date();
        $scope.name = "Vlad Tutunea";
    }])
    .controller('DashboardController', ['$scope', '$parse', function($scope, $parse) {
        $scope.entryInput = undefined;

        // Setting up watch expression to watch the entryInput
        $scope.$watch('entryInput', function(newVal, oldVal, scope) {
            if (newVal !== oldVal) {
                // Look for any part of the string that starts with @
                var strUsers = newVal.match(/[@]+[A-Za-z0-9_]+/g),
                    i;
                if (strUsers) {
                    for (i = 0; i < strUsers.length; i++) {
                        var user = strUsers[i],
                            cleanUser = user.slice(1),
                            parsedUser = $parse("users." + cleanUser)(scope);
                        if (parsedUser) {
                            // An user was found on our scope in the "users" object
                        } else {
                            // No user was found on our scope in the "users" object
                        }
                    }
                }
            }
        });

    }]);