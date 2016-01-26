angular.module('app')
    .controller('appCtrl', ['$scope', '$rootScope',
        function($scope, $rootScope) {
            "use strict";

            $scope.isCollapsed = true;

            $rootScope.$on('$stateChangeStart',
                function(event, toState, toParams, fromState, fromParams) {
                    if (fromState.name === 'home' && toState.name !== 'home') {
                        $scope.notHome = true;
                    } else if (fromState.name !== 'home' && toState.name === 'home') {
                        $scope.notHome = false;
                    }

                    $scope.stateClass = toState.name;
                });
        }]);