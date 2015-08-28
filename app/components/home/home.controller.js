(function() {
    'use strict';


angular
    .module('ngDrupalServicesTests.home.controller', ['ngDrupal7Services-3_x.resources.system.resource', 'ngDrupal7Services-3_x.resources.system.channel'])
    .controller('HomeController', HomeController);


/** @ngInject */
function HomeController($scope,SystemResourceConstant, SystemResource, SystemChannel) { 
	/* jshint validthis: true */
	var vm = this;
	console.log(SystemResource); 
	
	vm.isCollapsed = false;
	vm.doStuff = doStuff;
	
	///////////////////////
	
	function doStuff() {
	     alert(1); 
	}

};

HomeController.$inject = ['$scope', 'SystemResourceConstant','SystemResource', 'SystemChannel', ];

})();
