/*jslint nomen: true, es5: true */
/*global console, _ */
(function (angular) {
	'use strict';

	angular.module('app.controllers', [])

		.controller('demoIonicSelectboxCtrl',
				['$scope', '$stateParams',
				// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
				// You can include any angular dependencies as parameters for this function
				// TIP: Access Route Parameters for your page via $stateParams.parameterName
				function ($scope, $stateParams) {


				}]
			 )

		.controller('inlineSearchExampleCtrl',
				['$scope', '$stateParams', 'geoData',
				// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
				// You can include any angular dependencies as parameters for this function
				// TIP: Access Route Parameters for your page via $stateParams.parameterName
				function ($scope, $stateParams, geoData) {
					var sCtrl = this;
          //sCtrl.cities = geoData.cities;

					sCtrl.getCityName = function (city) {
						return city.cityName;
					};

          // Because of a performance illusion, data is loaded after entering the state
					$scope.$on('$ionicView.afterEnter', function () {
            sCtrl.cities = geoData.cities;
          });

				}]
			 )

		.controller('groupedDisplayExampleCtrl',
				['$scope', '$stateParams', 'geoData',
				// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
				// You can include any angular dependencies as parameters for this function
				// TIP: Access Route Parameters for your page via $stateParams.parameterName
				function ($scope, $stateParams, geoData) {
					var gCtrl = this;

					gCtrl.getCityName = function (city) {
						return city.cityName;
					};
					gCtrl.parseDepartment = function (deptCode) {
						return (_.find(gCtrl.departments, { departmentCode: deptCode	})).departmentName;
					};

					// Binds a watcher to modalSearch to debounce search and use a filteredList
					$scope.$watch(angular.bind(this, function () {
						return this.city;
					}),
						function (newVal, oldVal) {
							if (newVal !== oldVal) {
								gCtrl.cityDepartment = _.find(gCtrl.departments, { departmentCode: newVal.deptCode });
								gCtrl.department = gCtrl.cityDepartment;
								console.log(gCtrl.cityDepartment);
							}

						});

          // Because of a performance illusion, data is loaded after entering the state
          $scope.$on('$ionicView.afterEnter', function () {
            gCtrl.departments = geoData.departments;
            gCtrl.cities      = geoData.cities;
          });

				}]
			 )

		.controller('extraInformationExampleCtrl',
				['$scope', '$stateParams', 'geoData',
				// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
				// You can include any angular dependencies as parameters for this function
				// TIP: Access Route Parameters for your page via $stateParams.parameterName
				function ($scope, $stateParams, geoData) {
					var eCtrl = this;

					eCtrl.getCityName = function (city) {
						return 'City: ' + city.cityName + ', Dept: ' + city.deptName;
					};
					eCtrl.displayCityName = function (city) {
						return city.cityName;
					};

					eCtrl.displayDetail = function (item) {
						console.log('eCtrl.displayDetail', item);
						return '<extrainfo city="$ctrl.displayedItem"></extrainfo>';
					};
					eCtrl.parseDepartment = function (deptCode) {
						return (_.find(eCtrl.departments, { departmentCode: deptCode })).departmentName;
					};

					// Binds a watcher to modalSearch to debounce search and use a filteredList
					$scope.$watch(angular.bind(this, function () {
						return this.city;
					}),
						function (newVal, oldVal) {
							if (newVal !== oldVal) {
								eCtrl.cityDepartment = _.find(eCtrl.departments, { departmentCode: newVal.deptCode });
								eCtrl.department = eCtrl.cityDepartment;
								console.log(eCtrl.cityDepartment);
							}

						});

          // Because of a performance illusion, data is loaded after entering the state
          $scope.$on('$ionicView.afterEnter', function () {
            eCtrl.departments = geoData.departments;
            eCtrl.cities      = geoData.cities;
          });


				}]
			 )

		.component('extrainfo',
			{
				bindings: {
					city: '='
				},
				controller: function () {
					var extraInfoCtrl = this;
					console.log('extraInfoCtrl', extraInfoCtrl.city);
				},
				template:  '<div class="item" ng-if="!!$ctrl.city">\
								<p><strong>JSON value:</strong></p>\
								<pre>{{$ctrl.city | json}}</pre>\
							</div>'
			})

		.controller('gridController',
				['$scope', '$stateParams', 'geoData',
				// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
				// You can include any angular dependencies as parameters for this function
				// TIP: Access Route Parameters for your page via $stateParams.parameterName
				function ($scope, $stateParams, geoData) {

					var gridCtrl = this;

					/**
					 * Retrieves city names when a value is selected.
					 * @param   {JSON object} city The selected value or values
					 * @returns {String} Text to be placed as a placeholder when a value is selected
					 */
					gridCtrl.getCityName = function (city) {
						//return 'City: ' + city.cityName + ', Dept: ' + city.deptName;

						return (!!!gridCtrl.multiCity) ? 'Select cities' : 'Select more cities';
					};
					gridCtrl.displayCityName = function (city) {
						return city.cityName;
					};

					gridCtrl.parseDepartment = function (deptCode) {
						return (_.find(gridCtrl.departments, { departmentCode: deptCode })).departmentName;
					};

          // Because of a performance illusion, data is loaded after entering the state
          $scope.$on('$ionicView.afterEnter', function () {
            gridCtrl.departments = geoData.departments;
            gridCtrl.cities      = geoData.cities;

            // Array used to display the city list. This array is updated every time a set of values is selected.
            gridCtrl.citiesSet   = gridCtrl.cities;
          });


				}]
			 )

		.component('griddisplay',
			{
				bindings: {
					item: '='
				},
				template:  '<div class="selectbox-grid-item small">\
								<p><strong>City code:</strong> {{$ctrl.item.cityCode}}</p>\
								<p><strong>City:</strong> {{$ctrl.item.cityName}}</p>\
							</div>'
			});

}(window.angular));
