angular.module('app')
	.config(['$stateProvider',
		function($stateProvider) {
			"use strict";

			$stateProvider.state('home', {
				url: '/',
				templateUrl: 'home/home.html'
			});
		}]);