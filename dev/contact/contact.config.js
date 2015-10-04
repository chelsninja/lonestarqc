angular.module('app')
    .config(['$stateProvider',
        function($stateProvider) {
            "use strict";

            $stateProvider.state('contact', {
                url: '/contact',
                templateUrl: 'contact/contact.html',
                controller: 'contactCtrl'
            });
        }]);