angular.module('app')
    .constant('calendar.constant', {
        calEvents: [
            {
                title: 'Practice',
                start: "19:00",
                end: "21:00",
                dowStart: new Date(2015, 7, 26),
                dow: [3],
                className: 'practice'
            },
            {
                title: 'Practice',
                start: "12:00",
                end: "15:00",
                dowStart: new Date(2015, 7, 26),
                dow: [0],
                className: 'practice'
            },
            {
                title: '2015-2016 LSQC Tryouts',
                start: '2015-08-15 11',
                className: 'tryouts'
            },
            {
                title: 'Group Practice',
                start: '2015-09-13 11',
                className: 'practice'
            },
            {
                title: 'Fifth Annual Breakfast Taco Tournament',
                start: '2015-09-19',
                end: '2015-09-21',
                className: 'tournament',
                allDay: true
            },
            {
                title: 'Group Practice',
                start: '2015-10-04 11',
                className: 'practice'
            },
            {
                title: 'Wolfpack Classic',
                start: '2015-10-17',
                end: '2015-10-19',
                className: 'tournament',
                allDay: true
            },
            {
                title: 'Diamond Cup',
                start: '2015-11-14',
                end: '2015-11-16',
                className: 'tournament',
                allDay: true
            }
        ]
    });