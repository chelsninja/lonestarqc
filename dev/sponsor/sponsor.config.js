angular.module('app')
    .config(['$stateProvider',
        function($stateProvider) {
            "use strict";

            $stateProvider.state('sponsor', {
                url: '/sponsor',
                templateUrl: 'sponsor/sponsor.html'
            });
        }]);