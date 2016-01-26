angular.module('app')
    .config(['$stateProvider',
        function($stateProvider) {
            "use strict";

            $stateProvider.state('contact', {
                url: '/contact/{subject}',
                templateUrl: 'contact/contact.html',
                controller: 'contactCtrl'
            });
        }]);