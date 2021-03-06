/**
 * selectComponent.js
 *
 **/
/*jslint nomen: true */
/*global console, _ */
(function (angular) {
	'use strict';

	var ionicSelect,
		selectBoxController = function ($scope, $ionicModal, $ionicScrollDelegate, $timeout, $compile, $filter, $window) {

			var selectCtrl = this,
				keyArr,
				initModal = function () {
					return $ionicModal.fromTemplateUrl('selectModal.html', {
						scope: $scope,
						//animation: 'slide-in-right'
						animation: 'animated slideInRight',
						hideDelay: 620
					}).then(function (modal) {
						selectCtrl.modal = modal;
					});
				},
				windowHeight = $window.innerHeight;

			selectCtrl.ddisplayItem = function (item) {
				var result = (!!!item) ? undefined : (!!selectCtrl.displayItem) ? selectCtrl.displayItem(item) : selectCtrl.pparseData(item);
				return result;
			};

			selectCtrl.pparseData = function (data) {
				var result = (!!!data) ? undefined : (!!selectCtrl.parseData) ? selectCtrl.parseData(data) : data;
				return result;
			};

			selectCtrl.pparseGroupKey = function (key) {
				return (!!!key) ? undefined : (!!selectCtrl.parseGroupKey) ? selectCtrl.parseGroupKey(key) : key;
			};

			selectCtrl.clearSearch = function () {
				selectCtrl.modalSearch = undefined;
				selectCtrl.showDetail = -1;

				$ionicScrollDelegate.scrollTop(true);
			};

			selectCtrl.scrollBy = function ($event, itemHeight) {
				var elementPositionY = $event.y,
					offsetY = (elementPositionY + itemHeight >= windowHeight) ? itemHeight - (windowHeight - elementPositionY) : 0;
				$ionicScrollDelegate.scrollBy(0, offsetY, false);
			};

			selectCtrl.toggleGroup = function (key) {
				selectCtrl.displayKey[key] = !!!selectCtrl.displayKey[key];
				$ionicScrollDelegate.resize();
			};

			selectCtrl.displayDetail = function (event, item, scrollOffset) {
				event.preventDefault();
				event.stopPropagation();

				var template,
					html,
					element,
					isDisplaying = (selectCtrl.displayedItem === item);

				selectCtrl.displayedItem = item;
				if (!!selectCtrl.displayCallback && !isDisplaying) {
					$timeout(function () {

            element = angular.element(document.querySelector('.select-modal ion-content .visible-detail'));
            html = selectCtrl.displayCallback(item);
            template = $compile(angular.element(html))($scope);

            element.append(template);

            $ionicScrollDelegate.resize();
            scrollOffset = (!scrollOffset) ? (!!selectCtrl.scrollOffset) ? selectCtrl.scrollOffset : 380 : scrollOffset;
            selectCtrl.scrollBy(event, scrollOffset);

					}, 10);
				}

				return false;

			};

			selectCtrl.selectValue = function (item) {
				//$timeout(function () {
        $scope.$applyAsync(function () {
					selectCtrl.model = (_.keys(item).length === 1 && _.keys(item)[0] === 'displayItem') ? item.displayItem : item;

					//selectCtrl.model.displayModel = selectCtrl.pparseData(item);
					selectCtrl.closeModal();
				});
			};

			// If you don't like using a directive for this you may uncomment these 2 lines
			// and change the input on selectComponent.html to <input type="text" placeholder="{{$ctrl.placeHolder}}" ng-model="$ctrl.model.displayModel" readonly>
			//selectCtrl.model              = (!!!selectCtrl.model) ? {} : selectCtrl.model;
			//selectCtrl.model.displayModel = (!!!selectCtrl.model.displayModel) ? undefined : selectCtrl.pparseData(selectCtrl.model);
			selectCtrl.placeHolder = (!!!selectCtrl.placeHolder) ? 'Seleccione' : selectCtrl.placeHolder;

			// Modal controller functions
			// http://ionicframework.com/docs/api/service/$ionicModal/
			initModal();
			selectCtrl.openModal = function () {
				if (!selectCtrl.disableIf) {

					// Native transtiions commented due to crappy performance on devices
					//                try {
					//                    var options = {
					//                            "direction"        : "left", // 'left|right|up|down', default 'left' (which is like 'next')
					//                            "duration"         :  400, // in milliseconds (ms), default 400
					//                            "slowdownfactor"   :    1, // overlap views (higher number is more) or no overlap (1). -1 doesn't slide at all. Default 4
					//                            "iosdelay"         :  -1, //100, // ms to wait for the iOS webview to update before animation kicks in, default 60
					//                            "androiddelay"     :  -1//150 // same as above but for Android, default 70
					//                        };
					//                    if (window.plugins.nativepagetransitions) {
					//                        window.plugins.nativepagetransitions.slide(
					//                            options,
					//                            function (msg) { }, // called when the animation has finished
					//                            function (msg) { } // called in case you pass in weird values
					//                        );
					//                    }
					//                } catch (mEx) {
					//                    console.warn('ERROR on declaring native transition');
					//                }

					if (!!selectCtrl.groupBy) {
						keyArr = $filter('groupBy')(selectCtrl.list, selectCtrl.groupBy);
						keyArr = Object.keys(keyArr);
						selectCtrl.displayKey = {};
						selectCtrl.displayKey[keyArr[0]] = true;
					}

					if (!selectCtrl.modal) {
						initModal().then(function () {
							selectCtrl.modal.show();
							$ionicScrollDelegate.scrollTop(true);

							//                        try {
							//                            if (window.plugins.nativepagetransitions) {
							//                                window.plugins.nativepagetransitions.executePendingTransition();
							//                            }
							//                        } catch (mEx) {
							//                            console.warn('ERROR on native transition (!modal)');
							//                        }
						});
					} else {
						selectCtrl.modal.show();
						$ionicScrollDelegate.scrollTop(true);

						//                    try {
						//                        if (window.plugins.nativepagetransitions) {
						//                            window.plugins.nativepagetransitions.executePendingTransition();
						//                        }
						//                    } catch (mmEx) {
						//                        console.warn('ERROR on native transition (!!modal)');
						//                    }
					}
				}

			};
			selectCtrl.closeModal = function () {
				try {
					selectCtrl.modal.hide();
				} catch (ex) {
					console.warn('ERROR in closeModal: ', ex);
				}

			};
			//Cleanup the modal when we're done with it!
			$scope.$on('$destroy', function () {
				try {
					selectCtrl.modal.remove();
				} catch (ex) {
					console.warn('ERROR in destroy (removing modal): ', ex);
				}
			});
			// Execute action on hide modal
			$scope.$on('modal.hidden', function () {
				// Execute action
				selectCtrl.displayedItem = undefined;
				selectCtrl.modalSearch = undefined;

				if (selectCtrl.multiple) {
					// If multiple select is enabled clear the selected values
					// (not really necesary because selected values are deleted from the list)
					selectCtrl.list = _.each(selectCtrl.list, function (v, k) {
						if (!!v.multipleSelect) {
							var searchItem = _.pickBy(v, function (vv, k) { return k !== 'multipleSelect'; }),
								idx        = _.findIndex(selectCtrl.filteredList, searchItem);

							selectCtrl.filteredList[idx].multipleSelect = undefined;
						}

					});
				}
				//            try{
				//                selectCtrl.modal.remove();
				//            } catch(ex) {
				//                console.warn('ERROR in modal.hidden (removing modal): ', ex)
				//            }
			});
			// Execute action on remove modal
			$scope.$on('modal.removed', function () {
				// Execute action
				selectCtrl.modal = undefined;

			});


			selectCtrl.list = _.map(selectCtrl.list, function (v, k) {
				return (!angular.isString(v)) ? _.assign(v, {
					displayItem: selectCtrl.ddisplayItem(v)
				}) : {
					displayItem: selectCtrl.ddisplayItem(v)
				};
			});
			selectCtrl.filteredList = selectCtrl.list;

			// Binds a watcher to list to avoid blank listings
			// when promises have not resolved
			$scope.$watchCollection(angular.bind(this, function () {
				return this.list;
			}),
				function (newVal, oldVal) {
					//console.log('Updates list');
					if ((!!newVal || !!oldVal) && newVal !== oldVal) {
						selectCtrl.filteredList = (!!newVal) ? selectCtrl.list : selectCtrl.filteredList;
						selectCtrl.filteredList = _.map(selectCtrl.filteredList, function (v, k) {
							return (!angular.isString(v)) ? _.assign(v, {
								displayItem: selectCtrl.ddisplayItem(v)
							}) : {
								displayItem: selectCtrl.ddisplayItem(v)
							};
						});
					}
				}
				);


			// Binds a watcher to modalSearch to debounce search and use a filteredList
			$scope.$watchCollection(angular.bind(this, function () {
				return this.modalSearch;
			}),
				function (newVal, oldVal) {
					//console.log('Updates filteredList');
					if ((!!newVal || !!oldVal) && newVal !== oldVal) {
						selectCtrl.filteredList = (!newVal) ? selectCtrl.list : $filter('fuzzy')(selectCtrl.list, selectCtrl.modalSearch);

						// If multiple select must set the checked attribute when searching
						if (selectCtrl.multiple) {
							var  multiSelectList = _.filter(selectCtrl.list, { multipleSelect: true });
							_.each(multiSelectList, function (v, k) {
								var searchItem = _.pickBy(v, function (vv, k) { return k !== 'multipleSelect'; }),
									idx        = _.findIndex(selectCtrl.filteredList, searchItem);
								if (idx !== -1) {
									selectCtrl.filteredList[idx].multiSelect = true;
								}
							});
						}
					}
				});

			selectCtrl.gridItemClick = function (event, item) {

				if (selectCtrl.multiple) {

					var searchItem = _.pickBy(item, function (v, k) { return k !== 'multipleSelect'; }),
						idx        = _.findIndex(selectCtrl.list, searchItem);

					// Updates the visible item multipleSelect state and the original list item
					item.multipleSelect                 = !!!item.multipleSelect;
					selectCtrl.list[idx].multipleSelect = item.multipleSelect;

					// Updates the griditem class to show a checkmark if selected
					// Don't do (change the state, not the class)
//					if (item.multipleSelect) {
//						angular.element(event.currentTarget).addClass('selected');
//					} else {
//						angular.element(event.currentTarget).removeClass('selected');
//					}

				} else {
					console.log('Not multiple select. Act normal.');
				}

			};

			selectCtrl.selectMultiple = function () {
				var multipleSelections = _.filter(selectCtrl.list, { multipleSelect: true });

				// Model does not have the multipleselect attribute.
				// Delete null values and return unique selections.
				selectCtrl.model = _.concat(selectCtrl.model, _.map(multipleSelections, function (v, k) {
					return _.pickBy(v, function (vv, kk) { return kk !== 'multipleSelect'; });
				}));
				selectCtrl.model = _.remove(selectCtrl.model, null);
				selectCtrl.model = _.uniq(selectCtrl.model);

				// Removes selected values from list
				_.pullAll(selectCtrl.list, multipleSelections);
				selectCtrl.filteredList = selectCtrl.list;

				selectCtrl.closeModal();

			};

		};

	ionicSelect = angular.module('ionic-selectbox', ['angular.filter', 'pasvaz.bindonce'])

		.directive('displayselected',
			function () {
				return {
					restrict: 'A',
					require: 'ngModel',
					scope: {
						parseData: '<'
					},
					link: function (scope, elem, attrs, ngModel) {

						var formatter = function (value) {
							var formattedValue = scope.parseData(value);
							elem.val(formattedValue);

							if (ngModel.$viewValue !== formattedValue) {
								ngModel.$setViewValue(value);
								ngModel.$render();
							}

							return formattedValue;
						};
						ngModel.$formatters.push(formatter);

					}
				};
			})

		.directive('griditem',
			function ($compile) {
				return {
					restrict: 'E',
					link: function (scope, elem, attr) {
						var gridComponent = attr.$attr.griddisplay,
							componentHtml = '<' + gridComponent + ' item="item"></' + gridComponent + '>';

						elem.html(componentHtml);
						$compile(elem.contents())(scope);
					}

				};

			})

		.component('selectbox',
			{
				bindings: {
					model: '=',
					list: '=',
					groupBy: '@?',
					parseGroupKey: '<?',
					displayCallback: '<?',
					parseData: '<?',
					displayItem: '<?',
					disableIf: '=?',
					placeHolder: '@?',
					scrollOffset: '<?',
					grid: '=?',
					gridDisplay: '<?',
					multiple: '=?'
				},
				controller: selectBoxController,
				templateUrl: 'templates/selectComponent.html'
			});

}(window.angular));
