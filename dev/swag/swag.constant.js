angular.module('app')
    .constant('swag.constant', {
        type: [
            'Accessories',
            'Clothing',
            'Home'
        ],
        swag: [
            {
                id: 1,
                name: 'Never Quit Tee - Red',
                description: 'Lightweight, premium fabric, unisex t-shirt',
                thumbs: ['never-quit-red-xs'],
                type: 'Clothing',
                price: 20,
                payPalID: 'VPTGV6QBZLWFU',
                sizes: ['XS', 'S', 'M', 'L'],
                notes: [
                    'The model is wearing a size extra small.',
                    'Made by American Apparel.',
                    '3.0 oz. 100% combed cotton.',
                    'Made in USA.'
                ]
            },
            {
                id: 2,
                name: 'Never Quit Tee - Blue',
                description: 'Lightweight, premium fabric, unisex t-shirt',
                banner: 'Sold Out',
                thumbs: ['never-quit-blue-fill'],
                type: 'Clothing',
                price: 20,
                payPalID: 'QF6ZJ98QHBUW6',
                sizes: ['XS', 'S', 'M', 'L'],
                notes: [
                    'The model is a computerized proof.',
                    'Made by American Apparel.',
                    '3.0 oz. 100% combed cotton.',
                    'Made in USA.'
                ]
            },
            {
                id: 3,
                name: 'Crest Shot Glass',
                description: 'Laser etched, Libbey 5120 whiskey glass',
                thumbs: ['crest-shot-glass'],
                type: 'Home',
                price: 5,
                payPalID: 'LXQP8U6QAA5T6',
                sizes: ['One Size'],
                notes: [
                    'Made by Libbey Glassware.',
                    '1.5 oz (44 ml).',
                    'Whiskey glass.',
                    'High quality laser etched.'
                ]
            },
            {
                id: 4,
                name: 'Crest Snapback',
                description: 'Two-tone, heather grey and royal blue, adjustable snapback',
                banner: 'Sold Out',
                thumbs: [
                    'crest-snapback-1',
                    'crest-snapback-2'
                ],
                type: 'Accessories',
                price: 25,
                payPalID: 'SG8ULDQH26VBQ',
                sizes: ['One Size'],
                notes: [
                    'Acrylic and wool blend.',
                    'Adjustable Strap.',
                    'One size fits all.'
                ]
            },
            {
                id: 6,
                name: 'Crest Tee',
                description: 'Two-sided, Gildan ultra cotton, unisex t-shirt',
                thumbs: [
                    'crest-tee-sm-front',
                    'crest-tee-sm-back'
                ],
                type: 'Clothing',
                price: 15,
                payPalID: 'LV3CR9MSDGX2J',
                sizes: ['S', 'M', 'L', 'XL'],
                notes: [
                    'The model is wearing a size small.',
                    '6.1 oz. 100% pre-shrunk cotton.',
                    'Sturdy heavyweight cotton.',
                    'Double-needle stitched for durability.'
                ]
            },
            {
                id: 7,
                name: '#LSQChristmas Shot Glass',
                description: 'Laser etched, Libbey 5120 whiskey glass',
                banner: 'Sold Out',
                thumbs: ['lsqchristmas-shot-glass.png'],
                type: 'Home',
                price: 5,
                payPalID: '5JWZB7VBJV3GC',
                sizes: ['One Size'],
                notes: [
                    'Made by Libbey Glassware.',
                    '1.5 oz (44 ml).',
                    'Whiskey glass.',
                    'High quality laser etched.'
                ]
            }
            //{
            //    id: 8,
            //    name: 'Bat City Shot Glass',
            //    description: 'Laser etched, Libbey 5120 whiskey glass',
            //    banner: 'Special Edition',
            //    thumbs: ['batcity-shot-glass.png'],
            //    type: 'Home',
            //    price: 5,
            //    payPalID: '',
            //    sizes: ['One Size'],
            //    notes: [
            //        'Made by Libbey Glassware.',
            //        '1.5 oz (44 ml).',
            //        'Whiskey glass.',
            //        'High quality laser etched.'
            //    ]
            //},
            //{
            //    id: 9,
            //    name: 'Bat City Tee',
            //    description: '',
            //    thumbs: [
            //        'batcity-tee-sm-front',
            //        'batcity-tee-sm-back'
            //    ],
            //    type: 'Clothing',
            //    price: 15,
            //    payPalID: 'LV3CR9MSDGX2J',
            //    sizes: ['S', 'M', 'L', 'XL'],
            //    notes: []
            //}
        ]
    });