angular.module('app')
    .controller('contactCtrl', ['$scope', '$stateParams',
        function($scope, $stateParams) {
            "use strict";

            $scope.subject = $stateParams.subject;
        }
    ]);