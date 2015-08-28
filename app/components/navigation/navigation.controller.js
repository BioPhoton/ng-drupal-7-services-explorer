(function() {
    'use strict';

angular
    .module('ngDrupalServicesTests.navigation.controller', [])
    .controller('NavigationController', NavigationController);

/** @ngInject */
function NavigationController($scope) { 
	/* jshint validthis: true */
	var vm = this;
	
	vm.navCollapsed = true;
	
};

NavigationController.$inject = ['$scope'];

})();
