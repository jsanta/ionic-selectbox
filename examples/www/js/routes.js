(function (angular) {
	'use strict';

	angular.module('app.routes', [])

		.config(function ($stateProvider, $urlRouterProvider) {

			// Ionic uses AngularUI Router which uses the concept of states
			// Learn more here: https://github.com/angular-ui/ui-router
			// Set up the various states which the app can be in.
			// Each state's controller can be found in controllers.js
			$stateProvider



				.state('demoSelectBox', {
					url: '/',
					templateUrl: 'templates/demoIonicSelectbox.html',
					controller: 'demoIonicSelectboxCtrl as dCtrl'
				})

				.state('search', {
					url: '/search',
					templateUrl: 'templates/inlineSearchExample.html',
					controller: 'inlineSearchExampleCtrl as sCtrl'
				})

				.state('grouped', {
					url: '/grouped',
					templateUrl: 'templates/groupedDisplayExample.html',
					controller: 'groupedDisplayExampleCtrl as gCtrl'
				})

				.state('extra', {
					url: '/extraInfo',
					templateUrl: 'templates/extraInformationExample.html',
					controller: 'extraInformationExampleCtrl as eCtrl'
				})

				.state('grid', {
					url: '/grid',
					templateUrl: 'templates/gridDisplayExample.html',
					controller: 'gridController as gridCtrl'
				});

			$urlRouterProvider.otherwise('/');

		});


}(window.angular));
