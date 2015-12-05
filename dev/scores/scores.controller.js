angular.module('app')
    .controller('scoresCtrl', ['$scope', 'scores.constant',
        function($scope, scoresConstant) {
            "use strict";

            $scope.scores = scoresConstant.scores;
        }]);