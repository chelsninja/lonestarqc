angular.module('app')
    .controller('swagCtrl', ['$scope', '$stateParams', 'swag.constant', '$filter', '$uibModal', 'cartProperties',
        function($scope, $stateParams, swagConstant, $filter, $uibModal, cartProperties) {
            "use strict";

            $scope.success = $stateParams.success;
            $scope.allSwag = swagConstant.swag;
            $scope.swag3 = chunk(swagConstant.swag, 3);
            $scope.swag2 = chunk(swagConstant.swag, 2);
            $scope.types = swagConstant.type;
            $scope.filteredType = '';

            $scope.filterByType = function(type) {
                $scope.filteredType = type;
                var filteredSwag = $filter('filter')(swagConstant.swag, { type: type });
                $scope.swag3 = chunk(filteredSwag, 3);
                $scope.swag2 = chunk(filteredSwag, 2);
            };

            $scope.openSwagModal = function(selectedItem) {
                var swagModal = $uibModal.open({
                    templateUrl: 'swag/swag-modal/swag-modal.html',
                    controller: 'swagModalCtrl',
                    windowClass: 'swag-modal',
                    size: 'lg',
                    resolve: {
                        item: function() {
                            return selectedItem;
                        }
                    }
                });

                swagModal.result.then(function(selectedItem) {
                    cartProperties.addToCart(selectedItem);
                });
            };

            function chunk(arr, size) {
                var newArr = [];
                for (var i=0; i<arr.length; i+=size) {
                    newArr.push(arr.slice(i, i+size));
                }
                return newArr;
            }
        }
    ]);