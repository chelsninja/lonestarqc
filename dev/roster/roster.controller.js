angular.module('app')
    .controller('rosterCtrl', ['$scope', 'roster.constant',
        function($scope, rosterConstant) {
            "use strict";

            $scope.players = rosterConstant.players;
        }]);