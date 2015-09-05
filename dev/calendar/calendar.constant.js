angular.module('app')
    .constant('calendar.constant', {
        calEvents: [
            {
                id: 'practice1',
                title: 'Practice',
                start: "19:00",
                end: "21:00",
                dowStart: new Date(2015, 7, 26),
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
                dow: [0],
                className: 'practice',
                location: 'Zilker Park',
                locationUrl: 'https://goo.gl/maps/2wxVe'
            },
            {
                id: 'tryouts1',
                title: '2015-2016 Fall Tryouts',
                start: '2015-08-15 11',
                className: 'tryouts',
                location: 'Domain Central Park',
                locationUrl: 'https://www.facebook.com/events/1630272940545110/'
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
                end: '2015-09-21',
                className: 'tournament',
                allDay: true,
                location: 'Huntsville, Texas 77340',
                locationUrl: 'https://www.facebook.com/events/848216885264818/'
            },
            {
                id: 'group2',
                title: 'Group Practice',
                start: '2015-10-04 11',
                className: 'practice',
                location: 'Zilker Park',
                locationUrl: 'https://goo.gl/maps/2wxVe'
            },
            {
                id: 'tourny2',
                title: 'Wolfpack Classic',
                start: '2015-10-17',
                end: '2015-10-19',
                className: 'tournament',
                allDay: true,
                location: 'TBA',
                locationUrl: '#'
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
            }
        ]
    });