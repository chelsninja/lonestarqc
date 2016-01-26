angular.module('app')
    .controller('swagModalCtrl', ['$scope', '$uibModalInstance', 'item',
        function($scope, $uibModalInstance, item) {
            "use strict";

            $scope.item = item;

            $scope.cancel = function() {
                $uibModalInstance.dismiss('cancel');
            };
        }
    ]);