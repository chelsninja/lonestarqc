angular.module('app')
    .controller('eventCtrl', ['$scope', '$stateParams',
        function($scope, $stateParams) {
            "use strict";

            $scope.events.forEach(function(event) {
                if (event.id === $stateParams.eventId) {
                    $scope.selectedEvent = event;
                }
            });
        }]);