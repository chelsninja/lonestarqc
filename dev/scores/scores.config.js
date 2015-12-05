angular.module('app')
    .config(['$stateProvider',
        function($stateProvider) {
            "use strict";

            $stateProvider.state('scores', {
                url: '/scores',
                templateUrl: 'scores/scores.html',
                controller: 'scoresCtrl'
            });
        }]);