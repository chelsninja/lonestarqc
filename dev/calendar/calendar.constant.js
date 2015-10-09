angular.module('app')
    .constant('calendar.constant', {
        calEvents: [
            {
                id: 'tryouts1',
                title: '2015-2016 Fall Tryouts',
                start: '2015-08-15 11',
                className: 'tryouts',
                location: 'Domain Central Park',
                locationUrl: 'https://www.facebook.com/events/1630272940545110/'
            },
            {
                id: 'practice1',
                title: 'Practice',
                start: "19:00",
                end: "21:00",
                dowStart: new Date(2015, 7, 26),
                dowEnd: new Date(2015, 9, 14),
                dow: [3],
                className: 'practice',
                location: 'EA Soccer Field',
                locationUrl: 'https://goo.gl/maps/Ets4j'
            },
            {
                id: 'practice2',
                title: 'Practice',
                start: "12:00",
                end: "15:00",
                dowStart: new Date(2015, 7, 26),
                dowEnd: new Date(2015, 8, 23),
                dow: [0],
                className: 'practice',
                location: 'Zilker Park',
                locationUrl: 'https://goo.gl/maps/2wxVe'
            },
            {
                id: 'practice3',
                title: 'Practice',
                start: "12:00",
                end: "15:00",
                dowStart: new Date(2015, 8, 23),
                dowEnd: new Date(2015, 8, 30),
                dow: [0],
                className: 'practice',
                location: 'Ramsey Park',
                locationUrl: 'https://goo.gl/maps/A2i9MKpfgpN2'
            },
            {
                id: 'group1',
                title: 'Group Practice',
                start: '2015-09-13 11',
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
                id: 'practice4',
                title: 'Practice',
                start: '2015-10-11 12',
                className: 'practice',
                location: 'Ramsey Park',
                locationUrl: 'https://goo.gl/maps/A2i9MKpfgpN2'
            },
            {
                id: 'group2',
                title: 'Group Practice',
                start: '2015-10-04 11',
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
                id: 'practice5',
                title: 'Practice',
                start: "12:00",
                end: "15:00",
                dowStart: new Date(2015, 9, 20),
                dowEnd: new Date(2015, 10, 11),
                dow: [0],
                className: 'practice',
                location: 'Zilker Park',
                locationUrl: 'https://goo.gl/maps/2wxVe'
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
                id: 'practice6',
                title: 'Practice',
                start: "19:00",
                end: "21:00",
                dowStart: new Date(2015, 9, 14),
                dowEnd: new Date(2015, 10, 18),
                dow: [3],
                className: 'practice',
                location: 'EA Softball Field',
                locationUrl: 'https://goo.gl/maps/Ets4j'
            },
            {
                id: 'practice7',
                title: 'Practice',
                start: "12:00",
                end: "15:00",
                dowStart: new Date(2015, 10, 18),
                dowEnd: new Date(2015, 11, 27),
                dow: [0],
                className: 'practice',
                location: 'Zilker Park',
                locationUrl: 'https://goo.gl/maps/2wxVe'
            },
            {
                id: 'tourny4',
                title: '#LSQChristmas Cup',
                start: '2016-01-16',
                className: 'tournament',
                allDay: true,
                location: 'Austin, TX #####',
                locationUrl: 'https://www.facebook.com/events/1689540537933780/'
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
            }
        ]
    });