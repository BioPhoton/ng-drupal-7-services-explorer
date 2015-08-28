(function() {
    'use strict';


angular
    .module('ngDrupalServicesTests.home.controller', [])
    .controller('HomeController', HomeController);


/** @ngInject */
function HomeController($scope) { 
	/* jshint validthis: true */
	var vm = this;
	
	vm.isCollapsed = false;
	vm.doStuff = doStuff;
	
	///////////////////////
	
	function doStuff() {
	     alert(1); 
	}

};

HomeController.$inject = ['$scope'];

})();
