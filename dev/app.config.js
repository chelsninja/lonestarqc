angular.module('app')
	.config(['$urlRouterProvider',
		function($urlRouterProvider) {
			"use strict";

			$urlRouterProvider.otherwise('/');
		}]);