angular.module('app')
    .constant('calendar.constant', {
        calEvents: [
            {
                id: 'tryouts1',
                title: '2015-2016 Fall Tryouts',
                start: new Date(2015, 7, 15, 11),
                className: 'tryouts',
                location: 'Domain Central Park',
                locationUrl: 'https://www.facebook.com/events/1630272940545110/'
            },
            {
                id: 'group1',
                title: 'Group Practice',
                start: new Date(2015, 5, 13, 11),
                className: 'practice',
                location: 'Zilker Park',
                locationUrl: 'https://goo.gl/maps/2wxVe'
            },
            {
                id: 'tourny1',
                title: 'Fifth Annual Breakfast Taco Tournament',
                start: '2015-09-19',
                className: 'tournament',
                allDay: true,
                location: 'Huntsville, Texas 77340',
                locationUrl: 'https://www.facebook.com/events/848216885264818/'
            },
            {
                id: 'group2',
                title: 'Group Practice',
                start: new Date(2015, 9, 4, 11),
                className: 'practice',
                location: 'Ramsey Park',
                locationUrl: 'https://goo.gl/maps/A2i9MKpfgpN2'
            },
            {
                id: 'tourny2',
                title: 'Wolfpack Classic',
                start: '2015-10-17',
                className: 'tournament',
                allDay: true,
                location: 'New Orleans, LA 70003',
                locationUrl: 'https://www.facebook.com/events/671048919693115/'
            },
            {
                id: 'tourny3',
                title: 'Diamond Cup',
                start: '2015-11-14',
                end: '2015-11-16',
                className: 'tournament',
                allDay: true,
                location: 'San Marcos, Texas 78666',
                locationUrl: 'https://www.facebook.com/events/898284100233552/956857414376220/'
            },
            {
                id: 'tourny4',
                title: '#LSQChristmas Cup',
                start: '2016-01-16',
                className: 'tournament',
                allDay: true,
                location: 'Austin, TX 78729',
                locationUrl: 'https://www.facebook.com/events/1689540537933780/'
            },
            {
                id: 'tryouts2',
                title: '2015-2016 Spring Tryouts',
                start: new Date(2015, 12, 17, 11),
                className: 'tryouts',
                location: 'Zilker Park',
                locationUrl: 'https://www.facebook.com/events/1703324559902260/'
            },
            {
                id: 'tourny5',
                title: 'USQ 2016 Southwest Regional Championship',
                start: '2016-02-20',
                end: '2016-02-22',
                className: 'tournament',
                allDay: true,
                location: 'San Marcos, TX 78666',
                locationUrl: 'https://www.facebook.com/events/1014687861905445/'
            },
            {
                id: 'tourny6',
                title: 'US Quidditch Cup 9',
                start: '2016-04-16',
                end: '2016-04-18',
                className: 'tournament',
                allDay: true,
                location: 'Columbia, SC 29212',
                locationUrl: 'https://www.facebook.com/events/145930742421756/'
            },
            {
                id: 'tourny7',
                title: 'Bat City Showcase',
                start: '2016-01-30',
                className: 'tournament',
                allDay: true,
                location: 'Austin, TX 78729',
                locationUrl: 'https://www.facebook.com/events/429611170578106/'
            },
            {
                id: 'practice1',
                title: 'Practice',
                start: "19:00",
                end: "21:00",
                dowStart: new Date(2015, 12, 2, 19),
                dowEnd: new Date(2016, 3, 20),
                dow: [3],
                className: 'practice',
                location: 'EA Softball Field',
                locationUrl: 'https://goo.gl/maps/Ets4j'
            },
            {
                id: 'practice2a',
                title: 'Practice',
                start: new Date(2015, 12, 10, 12),
                className: 'practice',
                location: 'Zilker Park',
                locationUrl: 'https://goo.gl/maps/2wxVe'
            },
            {
                id: 'practice2b',
                title: 'Practice',
                start: new Date(2015, 12, 24, 12),
                className: 'practice',
                location: 'Zilker Park',
                locationUrl: 'https://goo.gl/maps/2wxVe'
            },
            {
                id: 'practice2c',
                title: 'Practice',
                start: "12:00",
                end: "15:00",
                dowStart: new Date(2016, 1, 3, 12),
                dowEnd: new Date(2016, 1, 13),
                dow: [0],
                className: 'practice',
                location: 'Zilker Park',
                locationUrl: 'https://goo.gl/maps/2wxVe'
            },
            {
                id: 'group2a',
                title: 'Group Practice',
                start: new Date(2016, 1, 13, 14),
                className: 'practice',
                location: 'Zilker Park',
                locationUrl: 'https://goo.gl/maps/2wxVe'
            },
            {
                id: 'group2b',
                title: 'Group Practice (optional)',
                start: new Date(2016, 1, 14, 11),
                className: 'practice',
                location: 'Zilker Park',
                locationUrl: 'https://goo.gl/maps/2wxVe'
            },
            {
                id: 'practice2d',
                title: 'Practice',
                start: "12:00",
                end: "15:00",
                dowStart: new Date(2016, 1, 21, 12),
                dowEnd: new Date(2016, 2, 12),
                dow: [0],
                className: 'practice',
                location: 'Zilker Park',
                locationUrl: 'https://goo.gl/maps/2wxVe'
            },
            {
                id: 'group3a',
                title: 'Group Practice',
                start: new Date(2016, 2, 12, 14),
                className: 'practice',
                location: 'Zilker Park',
                locationUrl: 'https://goo.gl/maps/2wxVe'
            },
            {
                id: 'group3b',
                title: 'Group Practice',
                start: new Date(2016, 2, 13, 11),
                className: 'practice',
                location: 'Zilker Park',
                locationUrl: 'https://goo.gl/maps/2wxVe'
            },
            {
                id: 'practice2e',
                title: 'Practice',
                start: "12:00",
                end: "15:00",
                dowStart: new Date(2016, 2, 13, 12),
                dowEnd: new Date(2016, 2, 26),
                dow: [0],
                className: 'practice',
                location: 'Zilker Park',
                locationUrl: 'https://goo.gl/maps/2wxVe'
            },
            {
                id: 'group4a',
                title: 'Group Practice',
                start: new Date(2016, 2, 26, 14),
                className: 'practice',
                location: 'Zilker Park',
                locationUrl: 'https://goo.gl/maps/2wxVe'
            },
            {
                id: 'group4b',
                title: 'Group Practice',
                start: new Date(2016, 2, 27, 11),
                className: 'practice',
                location: 'Zilker Park',
                locationUrl: 'https://goo.gl/maps/2wxVe'
            },
            {
                id: 'practice2e',
                title: 'Practice',
                start: "12:00",
                end: "15:00",
                dowStart: new Date(2016, 2, 27, 12),
                dowEnd: new Date(2016, 3, 10),
                dow: [0],
                className: 'practice',
                location: 'Zilker Park',
                locationUrl: 'https://goo.gl/maps/2wxVe'
            },
            {
                id: 'group5',
                title: 'Group Practice',
                start: new Date(2016, 3, 10, 11),
                className: 'practice',
                location: 'Zilker Park',
                locationUrl: 'https://goo.gl/maps/2wxVe'
            },
            {
                id: 'practice3',
                title: 'Get Buckets',
                start: "17:30",
                end: "18:30",
                dowStart: new Date(2015, 12, 31, 17, 30),
                dowEnd: new Date(2016, 3, 18, 30),
                dow: [4],
                className: 'practice',
                location: 'Ramsey Park',
                locationUrl: 'https://goo.gl/maps/A2i9MKpfgpN2'
            }
        ]
    });