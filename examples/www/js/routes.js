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
          cache: false,
					templateUrl: 'templates/demoIonicSelectbox.html',
					controller: 'demoIonicSelectboxCtrl as dCtrl'
				})

				.state('search', {
					url: '/search',
          cache: false,
					templateUrl: 'templates/inlineSearchExample.html',
					controller: 'inlineSearchExampleCtrl as sCtrl',
          resolve: {
              geoData: function (geoService) {
                  return {
                      cities: geoService.getCities()
                  };
              }
          }
				})

				.state('grouped', {
					url: '/grouped',
          cache: false,
					templateUrl: 'templates/groupedDisplayExample.html',
					controller: 'groupedDisplayExampleCtrl as gCtrl',
                    resolve: {
                        geoData: function (geoService) {
                            return {
                                cities: geoService.getCities(),
                                departments: geoService.getDepartments()
                            };
                        }
                    }
				})

				.state('extra', {
					url: '/extraInfo',
          cache: false,
					templateUrl: 'templates/extraInformationExample.html',
					controller: 'extraInformationExampleCtrl as eCtrl',
                    resolve: {
                        geoData: function (geoService) {
                            return {
                                cities: geoService.getCities(),
                                departments: geoService.getDepartments()
                            };
                        }
                    }
				})

				.state('grid', {
					url: '/grid',
          cache: true,
					templateUrl: 'templates/gridDisplayExample.html',
					controller: 'gridController as gridCtrl',
					resolve: {
						geoData: function (geoService) {
							return {
								cities: geoService.getCities(),
								departments: geoService.getDepartments()
							};
						}
					}
				});

			$urlRouterProvider.otherwise('/');

		});


}(window.angular));
