angular.module('app')
    .config(['$stateProvider',
        function($stateProvider) {
            "use strict";

            $stateProvider.state('about', {
                url: '/about',
                templateUrl: 'about/about.html'
            });
        }]);