angular.module('app')
    .controller('eventsCtrl', ['$scope', 'events.constant',
        function($scope, eventsConstant) {
            "use strict";

            $scope.events = eventsConstant.events;
        }]);