angular.module('app')
    .controller('calendarCtrl', ['$scope', 'calendar.constant', '$filter', '$compile', '$sce',
        function($scope, calConstant, $filter, $compile, $sce) {
            "use strict";

            var lastEventClicked = undefined;
            var lastOpenPopover = undefined;
            var lastOpenPopoverScope = undefined;

            $scope.calPopoverHtml = {};

            $scope.eventSources = [{
                events: calConstant.calEvents,
                textColor: 'white'
            }];

            $scope.calConfig = {
                allDayDefault: false,
                eventRender: function(event, element) {
                    // Create popover html
                    if (event.allDay) {
                        $scope.calPopoverHtml[event.id] = $sce.trustAsHtml(
                            '<ul class="list-unstyled no-margin">' +
                            '<li><strong>Time:</strong> All Day</li>' +
                            '<li><strong>Location:</strong> <a href="'+event.locationUrl+'" target="_blank">'+event.location+'</a></li>' +
                            '</ul>' +
                            '<hr>' +
                            '<a ui-sref="scores" class="text-small-caps">View results</a>'
                        );
                    } else {
                        var dateTime = event.dowStart || event.start._d;
                        $scope.calPopoverHtml[event.id] = $sce.trustAsHtml(
                            '<ul class="list-unstyled no-margin">' +
                            '<li><strong>Time:</strong> '+$filter('date')(dateTime, 'shortTime')+'</li>' +
                            '<li><strong>Location:</strong> <a href="'+event.locationUrl+'" target="_blank">'+event.location+'</a></li>' +
                            '</ul>'
                        );
                    }
                    // Add popover
                    element.attr({
                        'uib-popover-html': 'calPopoverHtml.'+event.id,
                        'popover-title': event.title,
                        'popover-class': 'cal-popover'
                    });
                    $compile(element)($scope);

                    // Hide recurring events before start date
                    if (event._recurring && (event.start < event.dowStart)) {
                        return false;
                    }
                    // Hide recurring events after end date
                    if (event._recurring && (event.end > event.dowEnd)) {
                        return false;
                    }
                },
                eventClick: function() {
                    // Check to see if event is clicked twice
                    if (angular.element(this).context === lastEventClicked) {
                        lastEventClicked = undefined;
                        lastOpenPopover = undefined;
                        lastOpenPopoverScope = undefined;
                        return;
                    } else {
                        lastEventClicked = angular.element(this).context;
                    }
                    // Remove popover from the dom & update scope
                    if (lastOpenPopover) {
                        lastOpenPopover.remove();
                        lastOpenPopoverScope.$parent.isOpen = false;
                    }
                    // Update variables
                    lastOpenPopover = angular.element(this).next();
                    lastOpenPopoverScope = lastOpenPopover.scope();
                }
            };
        }]);