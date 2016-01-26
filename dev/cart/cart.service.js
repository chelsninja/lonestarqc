angular.module('app')
    .service('cartProperties', function() {
        "use strict";

        var cartItems = [];
        var cartTotals = {
            subtotal: 0,
            estShipping: 0,
            grandTotal: 0
        };

        this.getCart = function () {
            return cartItems;
        };

        this.getTotals = function () {
            return cartTotals;
        };

        this.addToCart = function(item) {
            cartItems.push(item);
            convertSize();
            calcSubtotal();
        };

        this.removeFromCart = function(item) {
            var index = cartItems.indexOf(item);
            cartItems.splice(index, 1);
            calcSubtotal();
        };

        function convertSize() {
            cartItems.forEach(function(item) {
                if (item.size === 'S') {
                    item.size = 'Small';
                } else if (item.size === 'M') {
                    item.size = 'Medium';
                } else if (item.size === 'L') {
                    item.size = 'Large';
                }
            });
        }

        function calcSubtotal() {
            cartTotals.subtotal = 0;
            cartItems.forEach(function(item) {
                cartTotals.subtotal += item.subtotal;
            });
            calcGrandTotal();
        }

        function calcGrandTotal() {
            cartTotals.grandTotal = cartTotals.subtotal + cartTotals.estShipping;
        }
    });