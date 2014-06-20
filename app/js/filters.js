angular.module('calendarApp.filters', [])
    .filter('blankIfNegative', function() {
        return function(input) {
            if (input <= 0) {
                return ' ';
            } else {
                return input;
            }
        }
    });