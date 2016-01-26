angular.module('app')
    .constant('cart.constant', {
        events: {
            cartUpdated: 'cart.updated'
        },
        shipping: [
            {
                min: 0,
                max: 3,
                cost: 5
            },
            {
                min: 4,
                max: 5,
                cost: 13
            },
            {
                min: 6,
                max: 10,
                cost: 18
            }
        ]
    });