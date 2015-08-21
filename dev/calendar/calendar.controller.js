angular.module('app')
    .controller('calendarCtrl', ['$scope', 'calendar.constant', '$compile',
        function($scope, calConstant, $compile) {
            "use strict";

            $scope.eventSources = [{
                events: calConstant.calEvents,
                textColor: 'white'
            }];

            $scope.calConfig = {
                allDayDefault: false,
                eventRender: function(event, element) {
                    // Add tooltip
                    element.attr({
                        'tooltip': event.title
                    });
                    $compile(element)($scope);

                    // Hide recurring events before start date
                    if (event._recurring && event.start < event.dowStart) {
                        return false;
                    }
                }
            };
        }]);