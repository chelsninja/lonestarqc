angular.module('app')
    .constant('events.constant', {
        events: [
            {
                id: 'xmascup1',
                name: '#LSQChristmas Cup',
                date: 'January 16, 2016',
                location: '7700 W Parmer Ln, Austin, TX 78729',
                logo: 'lsqc-xmas-cup-logo.jpg',
                fbUrl: 'https://www.facebook.com/events/1689540537933780/',
                descriptions: [
                    'Need a little quidditch action over the holiday break? Want to warm back up before the spring semester commences? The LSQChristmas Cup will be a one day winter fantasy tournament. ',
                    'The tournament will be done snake draft style with playing GMs consisting of the best of the Southwest. The draft will take place no more than 2 weeks from the start of the tournament to avoid last minute drops which always seem to crop up at fantasy tournaments and cause lots of headache. '
                ],
                teams: [
                    'Drew Wasikowski (LSQC) - Red',
                    'Kody Marshall (LSQC) - Blue',
                    'Hank Dugie (Texas Cavalry) - Orange',
                    'Simon Arends (LSQC) - Black',
                    'Michael Duquette (Texas)/ Tyrell Williams (Texas State) - Purple',
                    'Ethan Banner (LSQC) - Green',
                    'Romie Lof (Texas State) - Pink',
                    'Jackson Johnson (Texas State) - Grey'
                ]
            },
            {
                id: 'batcity1',
                name: 'Bat City Showcase',
                date: 'January 30, 2016',
                location: '7700 W Parmer Ln, Austin, TX 78729',
                logo: 'lsqc-bat-city-logo.jpg',
                fbUrl: 'https://www.facebook.com/events/429611170578106/',
                descriptions: [
                    'The Bat City Showcase hosted in Austin, TX will be the first ever community team only invitational tournament hosting teams from all over the US. The tournament will see 9 of the top community teams face off against one another throughout the day in a true showcase style tournament.',
                    'Everyone will play everyone outside of their region to take full advantage of interregional play. No champion will be crowned but the team with the best record can easily claim to be the best community team in the nation after facing the gauntlet that will be the Bat City Showcase. '
                ],
                teams: [
                    'Crimson Elite',
                    'Gambits',
                    'Gulfcoast Gumbeaux',
                    'Lone Star Quidditch Club',
                    'Lost Boys',
                    'QC Boston',
                    'Texas Cavalry',
                    'Tribe Quidditch',
                    'The Warriors'
                ],
                games: [
                    {
                        winner: 'Warriors',
                        homeTeam: 'Warriors',
                        homeScore: '110*',
                        awayTeam: 'Tribe',
                        awayScore: '90'
                    },
                    {
                        winner: 'Crimson',
                        homeTeam: 'Crimson',
                        homeScore: '110*',
                        awayTeam: 'Gumbeaux',
                        awayScore: '80'
                    },
                    {
                        winner: 'Cavalry',
                        homeTeam: 'Gambits',
                        homeScore: '100',
                        awayTeam: 'Cavalry',
                        awayScore: '140*'
                    },
                    {
                        winner: 'LSQC',
                        homeTeam: 'Lost Boys',
                        homeScore: '30',
                        awayTeam: 'LSQC',
                        awayScore: '150*'
                    },
                    {
                        winner: 'Warriors',
                        homeTeam: 'Warriors',
                        homeScore: '160*',
                        awayTeam: 'Gumbeaux',
                        awayScore: '90'
                    },
                    {
                        winner: 'QCB',
                        homeTeam: 'QCB',
                        homeScore: '190*',
                        awayTeam: 'Tribe',
                        awayScore: '40'
                    },
                    {
                        winner: 'Cavalry',
                        homeTeam: 'Crimson',
                        homeScore: '50*',
                        awayTeam: 'Cavalry',
                        awayScore: '110'
                    },
                    {
                        winner: 'Gambits',
                        homeTeam: 'Gambits',
                        homeScore: '190',
                        awayTeam: 'LSQC',
                        awayScore: '160*',
                        overtime: true
                    },
                    {
                        winner: 'Lost Boys',
                        homeTeam: 'QCB',
                        homeScore: '50',
                        awayTeam: 'Lost Boys',
                        awayScore: '70*'
                    },
                    {
                        winner: 'Warriors',
                        homeTeam: 'Crimson',
                        homeScore: '80',
                        awayTeam: 'Warriors',
                        awayScore: '120*'
                    },
                    {
                        winner: 'LSQC',
                        homeTeam: 'LSQC',
                        homeScore: '240*',
                        awayTeam: 'Tribe',
                        awayScore: '30'
                    },
                    {
                        winner: 'QCB',
                        homeTeam: 'Gambits',
                        homeScore: '80',
                        awayTeam: 'QCB',
                        awayScore: '210*'
                    },
                    {
                        winner: 'LSQC',
                        homeTeam: 'LSQC',
                        homeScore: '170*',
                        awayTeam: 'Crimson',
                        awayScore: '40'
                    },
                    {
                        winner: 'Lost Boys',
                        homeTeam: 'Lost Boys',
                        homeScore: '140*',
                        awayTeam: 'Gumbeaux',
                        awayScore: '40'
                    },
                    {
                        winner: 'Cavalry',
                        homeTeam: 'Cavalry',
                        homeScore: '130',
                        awayTeam: 'Warriors',
                        awayScore: '60*'
                    },
                    {
                        winner: 'QCB',
                        homeTeam: 'LSQC',
                        homeScore: '100',
                        awayTeam: 'QCB',
                        awayScore: '110*'
                    },
                    {
                        winner: 'Lost Boys',
                        homeTeam: 'Tribe',
                        homeScore: '50',
                        awayTeam: 'Lost Boys',
                        awayScore: '180*'
                    },
                    {
                        winner: 'Gambits',
                        homeTeam: 'Gambits',
                        homeScore: '150*',
                        awayTeam: 'Gumbeaux',
                        awayScore: '40'
                    },
                    {
                        winner: 'QCB',
                        homeTeam: 'Cavalry',
                        homeScore: '80',
                        awayTeam: 'QCB',
                        awayScore: '120*'
                    },
                    {
                        winner: 'Lost Boys',
                        homeTeam: 'Lost Boys',
                        homeScore: '140*',
                        awayTeam: 'Warriors',
                        awayScore: '90'
                    },
                    {
                        winner: 'Gambits',
                        homeTeam: 'Tribe',
                        homeScore: '80',
                        awayTeam: 'Gambits',
                        awayScore: '160*'
                    },
                    {
                        winner: 'Cavalry',
                        homeTeam: 'Cavalry',
                        homeScore: '160*',
                        awayTeam: 'Gumbeaux',
                        awayScore: '60'
                    },
                    {
                        winner: 'QCB',
                        homeTeam: 'Crimson',
                        homeScore: '40',
                        awayTeam: 'QCB',
                        awayScore: '150*'
                    },
                    {
                        winner: 'Lost Boys',
                        homeTeam: 'Lost Boys',
                        homeScore: '120*',
                        awayTeam: 'Cavalry',
                        awayScore: '60'
                    },
                    {
                        winner: 'Crimson',
                        homeTeam: 'Crimson',
                        homeScore: '150*',
                        awayTeam: 'Tribe',
                        awayScore: '100'
                    }
                ]
            }
        ]
    });