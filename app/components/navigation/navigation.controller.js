(function() {
    'use strict';

angular
    .module('ngDrupalServicesTests.navigation.controller', [])
    .controller('NavigationController', NavigationController);

NavigationController.$inject = ['$scope'];

/** @ngInject */
function NavigationController($scope) { 
	/* jshint validthis: true */
	var vm = this;
	
	vm.navCollapsed = true;
	
};



})();
