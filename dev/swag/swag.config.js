angular.module('app')
    .config(['$stateProvider',
        function($stateProvider) {
            "use strict";

            $stateProvider.state('swag', {
                url: '/swag/{success}',
                templateUrl: 'swag/swag.html',
                controller: 'swagCtrl'
            });
        }]);