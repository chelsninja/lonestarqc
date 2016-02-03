angular.module('app')
    .config(['$stateProvider',
        function($stateProvider) {
            "use strict";

            $stateProvider.state('event', {
                url: '/{eventId}',
                parent: 'events',
                templateUrl: 'events/event/event.html',
                controller: 'eventCtrl'
            });
        }]);