angular.module('app')
    .constant('scores.constant', {
        scores: [
            {
                tourny: '5th Annual Breakfast Taco Tournament',
                date: 'September 19, 2015',
                games: [
                    {
                        opp: 'Texas Cavalry',
                        ourScore: '190*',
                        oppScore: '80'
                    },
                    {
                        opp: 'Lumberjack Quidditch',
                        ourScore: '210*',
                        oppScore: '30'
                    },
                    {
                        opp: 'Silver Phoenix',
                        ourScore: '210*',
                        oppScore: '0'
                    },
                    {
                        opp: 'Sam Houston State University',
                        ourScore: '170*',
                        oppScore: '30'
                    },
                    {
                        opp: 'University of Texas',
                        ourScore: '160*',
                        oppScore: '60'
                    },
                    {
                        opp: 'Texas State University',
                        ourScore: '210*',
                        oppScore: '100'
                    }
                ],
                placed: '1st'
            },
            {
                tourny: 'Wolf Pack Classic IV',
                date: 'October 17, 2015',
                games: [
                    {
                        opp: 'University of Texas - San Antonio',
                        ourScore: '160',
                        oppScore: '80*'
                    },
                    {
                        opp: 'Austin Quidditch',
                        ourScore: '220',
                        oppScore: '70*'
                    },
                    {
                        opp: 'Lumberjack Quidditch',
                        ourScore: '150*',
                        oppScore: '0'
                    },
                    {
                        opp: 'Lumberjack Quidditch',
                        ourScore: '150*',
                        oppScore: '0'
                    },
                    {
                        opp: 'University of Arkansas',
                        ourScore: '170',
                        oppScore: '60*'
                    },
                    {
                        opp: 'Texas Cavalry',
                        ourScore: '90',
                        oppScore: '120*'
                    }
                ],
                placed: '3rd'
            }
        ]
    });