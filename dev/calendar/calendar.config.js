angular.module('app')
    .config(['$stateProvider',
        function($stateProvider) {
            "use strict";

            $stateProvider.state('calendar', {
                url: '/calendar',
                templateUrl: 'calendar/calendar.html'
            });
        }]);