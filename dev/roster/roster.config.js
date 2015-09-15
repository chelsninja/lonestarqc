angular.module('app')
    .config(['$stateProvider',
        function($stateProvider) {
            "use strict";

            $stateProvider.state('roster', {
                url: '/roster',
                templateUrl: 'roster/roster.html',
                controller: 'rosterCtrl'
            });
        }]);