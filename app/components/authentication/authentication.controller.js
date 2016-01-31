(function() {
    'use strict';


angular
    .module('ngDrupalServicesTests.authentication.controller', ['d7-services.commons.authentication.service', 'd7-services.commons.authentication.serviceConstant', 'd7-services.commons.authentication.channel', 'commons.filters.ifEmpty'])
    .controller('AuthenticationController', AuthenticationController);

	AuthenticationController.$inject = ['$scope', 'AuthenticationService', 'AuthenticationChannel', 'AuthenticationServiceConstant', '$filter'];

	/** @ngInject */ 
	function AuthenticationController($scope ,AuthenticationService, AuthenticationChannel, AuthenticationServiceConstant, $filter) 
	{ 
		
		
		var requestEnd = 0;
		var requestStart = 0;
		 
		// jshint validthis: true 
		var vm = this;

		//AuthenticationServiceConstant
		vm.roles = AuthenticationServiceConstant.roles;
		vm.accessLevels = AuthenticationServiceConstant.accessLevels;
		vm.selectedAccessLevel = 'public';
		vm.rolesOptions = {};
		
		//@TODO make initial selected accessLevel work also with other then accessLevels.public
		vm.isAuthorizedData = {};
		
		vm.isAuthorizedData.selectedAccessLevel = vm.accessLevels.public
		
		vm.isAuthorizedData.selectedRoles = {};
		vm.isAuthorizedData.selectedRoles['1'] =  vm.roles['1'];
		
		
		//create object of roleId and boolean
		//set roleID of vm.isAuthorizedData.accessLevel to true
		angular.forEach(vm.roles, function(v,k) { vm.rolesOptions[k] = (vm.isAuthorizedData.selectedRoles[k])?true:false; });
		
		//isAuthorized
		vm.isAuthorizedResult;
		vm.updateSelectedAccessLevel = updateSelectedAccessLevel;
		vm.updateSelectedRoles = updateSelectedRoles;
		vm.doIsAuthorized = doIsAuthorized;
		
		// login request
		
		// store requests
		vm.loginRequests = [];
		vm.loginData = {
				uid : ''
		};
		// test request
		vm.doLogin = doLogin;
		// test the login on confirm event
		AuthenticationChannel.subLoginConfirmed($scope, subLoginConfirmedCallback);
		// test the login on failed event
		AuthenticationChannel.subLoginFailed($scope, subLoginFailedCallback);

	    //__________________________________________________________________________________________________
		
		
		// isAuthorized check
		function updateSelectedAccessLevel(accessLevelKeyName) {
			vm.isAuthorizedData.selectedAccessLevel = vm.accessLevels[accessLevelKeyName];
		};
		
		function updateSelectedRoles(roleId) {
			
			if(vm.isAuthorizedData.selectedRoles[roleId]){
				delete vm.isAuthorizedData.selectedRoles[roleId];
			} else {
				vm.isAuthorizedData.selectedRoles[roleId] =  vm.roles[roleId];
			}
			
		};
		
		function doIsAuthorized(authType) {
			
			if(authType == 'level') {
				vm.isUserAuthorized = AuthenticationService.isAuthorized(vm.isAuthorizedData.selectedAccessLevel);
			}
			if(authType == 'roles_and_level') {
				vm.isUserAuthorized = AuthenticationService.isAuthorized(vm.isAuthorizedData.selectedAccessLevel, vm.isAuthorizedData.selectedRoles);
			}
			
		};
		// logout request
		
		// store requests
		vm.logoutRequests = [];

		// test request
		vm.doLogout = doLogout;
		// test the token on confirm event
		AuthenticationChannel.subLogoutConfirmed($scope, subLogoutConfirmedCallback);
		// test the token on failed event
	    AuthenticationChannel.subLogoutFailed($scope, subLogoutFailedCallback);

	    //__________________________________________________________________________________________________
	    
	    // refresh connection request
		
		// store requests
		vm.refreshConnectionRequests = [];

		// test request
		vm.doRefreshConnection = doRefreshConnection;
		// test the token on confirm event
		AuthenticationChannel.subRefreshConnectionConfirmed($scope, subRefreshConnectionConfirmedCallback);
		// test the token on failed event
	    AuthenticationChannel.subRefreshConnectionFailed($scope, subRefreshConnectionFailedCallback);

	    //__________________________________________________________________________________________________
	  
	    // getLastConnectionTime
		
		// store requests
		vm.lastConnectionTime = '';

		// test request
		vm.doGetLastConnectTime = doGetLastConnectTime;

	    //__________________________________________________________________________________________________
		
		// getConnectionState
		
		// store requests
		vm.connectionStateChanges = [];
		vm.currentConnectionState = '';

		// test request
		vm.doGetConnectionState = doGetConnectionState;
		// test connectionState updated event
		AuthenticationChannel.subConnectionStateUpdated($scope, subConnectionStateUpdatedCallback);

	    //__________________________________________________________________________________________________
		
		// getAuthenticationHeaders
		
		// store requests
		vm.currentAuthenticationHeaders = '';

		// test request
		vm.doGetAuthenticationHeaders = doGetAuthenticationHeaders;

	    //__________________________________________________________________________________________________
		
		// getCurrentUser
		
		// store requests
		vm.currentUserChanges = [];
		vm.currentUser = AuthenticationService.getCurrentUser();

		// test request
		vm.doGetCurrentUser = doGetCurrentUser;
		
		// test connectionState updated event
		AuthenticationChannel.subCurrentUserUpdated($scope, subCurrentUserUpdatedCallback);

	    //__________________________________________________________________________________________________
		
		///////////////////////
	    
		// login request
	    
	    // do request
		function doLogin(loginForm) {
			if(loginForm.$valid) {
				requestStart = Date.now();
		   		AuthenticationService.login(vm.loginData)
				    .then(
				    		//login success
				    		function(data) { 
				    			vm.loginData = {};
				    			console.log('auth login success', data);
				    			loginForm.$setPristine();
				    			loginForm.$setUntouched();
				    		},
				    		//login error
				    		function(data) { 
				    			console.log('auth login error'); 
				    		}
				    );
			}
			
		};
		
		// confirm callback
		function subLoginConfirmedCallback(data) { 
			requestEnd = Date.now();
			console.log('subLoginConfirmed'); 
			vm.loginRequests.push({requestStart:requestStart, requestEnd:requestEnd, requestDuration:requestEnd-requestStart, data:data});
		}
		// failed callback
		function subLoginFailedCallback(data) { 
			requestEnd = Date.now();
			console.log('subLoginFailed', data); 
			vm.loginRequests.push({requestStart:requestStart, requestEnd:requestEnd,  requestDuration:requestEnd-requestStart, data:data});
		}
		
		//_____________________________________________________________________________________________________________________________________________
		
		// logout request
	    
	    //do request
		function doLogout() {
			requestStart = Date.now();
	   		AuthenticationService.logout(vm.logoutData)
			    .then(
		    		//logout success
		    		function(data) { console.log('auth logout success'); },
		    		//logout error
		    		function(data) { console.log('auth logout error'); }
			    );
		};
		
		// confirm callback
		function subLogoutConfirmedCallback(data) { 
			requestEnd = Date.now();
			console.log('subLogoutConfirmed'); 
			vm.logoutRequests.push({requestStart:requestStart, requestEnd:requestEnd, requestDuration:requestEnd-requestStart, data:data});
		}
		// failed callback
		function subLogoutFailedCallback(data) { 
			requestEnd = Date.now();
			console.log('subLogoutFailed'); 
			vm.logoutRequests.push({requestStart:requestStart, requestEnd:requestEnd,  requestDuration:requestEnd-requestStart, data:data});
		}
		
		//_____________________________________________________________________________________________________________________________________________


		// refresh request
	    
	    //do request
		function doRefreshConnection() {
			requestStart = Date.now();
	   		AuthenticationService
	   			.refreshConnection()
	   				.then(	function(data) { console.log('auth RefreshConnection success'); },
	   						function(data) { console.log('auth RefreshConnection error'); }
	   				);
		};
		
		// confirm callback
		function subRefreshConnectionConfirmedCallback(data) { 
			requestEnd = Date.now();
			console.log('subRefreshConnectionConfirmedCallback'); 
			vm.refreshConnectionRequests.push({requestStart:requestStart, requestEnd:requestEnd, requestDuration:requestEnd-requestStart, data:data});
		}
		// failed callback
		function subRefreshConnectionFailedCallback(data) { 
			requestEnd = Date.now();
			console.log('subRefreshConnectionFailedCallback'); 
			vm.refreshConnectionRequests.push({requestStart:requestStart, requestEnd:requestEnd,  requestDuration:requestEnd-requestStart, data:data});
		}
		
		//_____________________________________________________________________________________________________________________________________________
		
		// get last ConnectionTime 
	    
	    //do request
		function doGetLastConnectTime() {
			vm.lastConnectionTime = AuthenticationService.getLastConnectTime();
		};
		
		
		
		//_____________________________________________________________________________________________________________________________________________
		
		// get connectionState 
		
	    //do request
		function doGetConnectionState() {
			console.log(AuthenticationService.getConnectionState()); 
			vm.currentConnectionState = AuthenticationService.getConnectionState();
		};
		
		// confirm callback
		function subConnectionStateUpdatedCallback(data) { 
			console.log('subConnectionStateUpdatedCallback'); 
			vm.connectionStateChanges.push({timeOfChange: Date.now(), from: vm.currentConnectionState, to: data});    
			vm.currentConnectionState = data;
		}
		
		//_____________________________________________________________________________________________________________________________________________
		
		// get authenticationHeaders 
	    
	    //do request
		function doGetAuthenticationHeaders() {
			vm.currentAuthenticationHeaders = AuthenticationService.getAuthenticationHeaders();    
		};
		
		//_____________________________________________________________________________________________________________________________________________
		
		// currentUser request
	    
	    //do request
		function doGetCurrentUser() {
			currentUser = AuthenticationService.getCurrentUser();
		};
		
		// confirm callback
		function subCurrentUserUpdatedCallback(data) { 
			console.log('subCurrentUserUpdatedCallback'); 
			vm.currentUserChanges.push({timeOfChange: Date.now(), from: vm.currentUser, to: data});
			vm.currentUser = data;
		}
		
		//_____________________________________________________________________________________________________________________________________________
		
	};
	
	

})();
