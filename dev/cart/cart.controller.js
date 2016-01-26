angular.module('app')
    .controller('cartCtrl', ['$scope', 'cart.constant', 'cartProperties',
        function($scope, cartConstant, cartProperties) {
            "use strict";

            $scope.cartItems = cartProperties.getCart();
            $scope.cartTotals = cartProperties.getTotals();
            $scope.deliveryOptions = ['Will Call', 'Ground Shipping', 'International Shipping'];

            $scope.removeItem = function(item) {
                cartProperties.removeFromCart(item);
            };
        }
    ]);