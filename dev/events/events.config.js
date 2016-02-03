angular.module('app')
    .config(['$stateProvider',
        function($stateProvider) {
            "use strict";

            $stateProvider.state('events', {
                url: '/events',
                templateUrl: 'events/events.html',
                controller: 'eventsCtrl'
            });
        }]);