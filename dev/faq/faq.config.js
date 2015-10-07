angular.module('app')
    .config(['$stateProvider',
        function($stateProvider) {
            "use strict";

            $stateProvider.state('faq', {
                url: '/faq',
                templateUrl: 'faq/faq.html'
            });
        }]);