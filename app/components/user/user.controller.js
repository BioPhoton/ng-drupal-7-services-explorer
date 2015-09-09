;(function() {
    'use strict';


angular
    .module('ngDrupalServicesTests.user.controller', ['ngDrupal7Services-3_x.resources.user.resource', 'ngDrupal7Services-3_x.resources.user.channel'])
    .controller('UserController', UserController);

	UserController.$inject = ['$scope', 'UserResource', 'UserChannel'];

	/** @ngInject */ 
	function UserController($scope, UserResource, UserChannel) { 
		
		var requestEnd = 0;
		var requestStart = 0;
		
		
		
		// jshint validthis: true 
		var vm = this;
		
		//retrieve request
		
		//store requests
		vm.retrieveRequests = [];
		vm.retrieveData = {
				uid : ''
		};
		//test request
		vm.doRetrieve = doRetrieve;
		//test the retrieve on confirm event
		UserChannel.subUserRetrieveConfirmed($scope, subUserRetrieveConfirmedCallback);
		//test the retrieve on failed event
	    UserChannel.subUserRetrieveFailed($scope, subUserRetrieveFailedCallback);

	    //__________________________________________________________________________________________________
	    
	    //login request
		
		//store requests
		vm.loginRequests = [];
		vm.loginData = {
				uid : ''
		};
		//test request
		vm.doLogin = doLogin;
		//test the login on confirm event
		UserChannel.subUserLoginConfirmed($scope, subUserLoginConfirmedCallback);
		//test the login on failed event
	    UserChannel.subUserLoginFailed($scope, subUserLoginFailedCallback);

	    //__________________________________________________________________________________________________
	    
	    //logout request
		
		//store requests
		vm.logoutRequests = [];

		//test request
		vm.doLogout = doLogout;
		//test the token on confirm event
		UserChannel.subUserLogoutConfirmed($scope, subUserLogoutConfirmedCallback);
		//test the token on failed event
	    UserChannel.subUserLogoutFailed($scope, subUserLogoutFailedCallback);

	    //__________________________________________________________________________________________________
	    
	    //token request
		
		//store requests
		vm.tokenRequests = [];

		//test request
		vm.doToken = doToken;
		//test the token on confirm event
		UserChannel.subUserTokenConfirmed($scope, subUserTokenConfirmedCallback);
		//test the token on failed event
	    UserChannel.subUserTokenFailed($scope, subUserTokenFailedCallback);

	    //__________________________________________________________________________________________________
	    
	    //create request
		
		//store requests
		vm.createRequests = [];
		vm.createData = {
				username : 's',
				password: 's',
				email : 's'
		};
		//test request
		vm.doCreate = doCreate;
		//test the create on confirm event
		UserChannel.subUserCreateConfirmed($scope, subUserCreateConfirmedCallback);
		//test the create on failed event
	    UserChannel.subUserCreateFailed($scope, subUserCreateFailedCallback);

	    //__________________________________________________________________________________________________
	    
	    //update request
		
		//store requests
		vm.updateRequests = [];
		vm.updateData = {};
		//test request
		vm.doUpdate = doUpdate;
		//test the update on confirm event
		UserChannel.subUserUpdateConfirmed($scope, subUserUpdateConfirmedCallback);
		//test the update on failed event
	    UserChannel.subUserUpdateFailed($scope, subUserUpdateFailedCallback);

	    //__________________________________________________________________________________________________
	    
	    //delete request
		
		//store requests
		vm.deleteRequests = [];
		vm.deleteErrors = {}
		vm.deleteData = {
				uid : '',
		};
		//test request
		vm.doDelete = doDelete;
		//test the delete on confirm event
		UserChannel.subUserDeleteConfirmed($scope, subUserDeleteConfirmedCallback);
		//test the delete on failed event
	    UserChannel.subUserDeleteFailed($scope, subUserDeleteFailedCallback);

	    //__________________________________________________________________________________________________
	    
	    //index request
		
		//store requests
		vm.indexRequests = [];
		vm.indexData = {};
	    vm.indexData.page = 0;
	    vm.indexData.fields = {};
	    vm.indexData.parameters = {};
	    vm.indexData.pagesize = 5;
		
	    vm.indexFieldsColapsed = true;
	    vm.indexParametersColapsed = true;
		//test request
		vm.doIndex = doIndex;
		//test the index on confirm event
		UserChannel.subUserIndexConfirmed($scope, subUserIndexConfirmedCallback);
		//test the index on failed event
	    UserChannel.subUserIndexFailed($scope, subUserIndexFailedCallback);

	    //__________________________________________________________________________________________________
	    
	    
		///////////////////////
		
		//retrieve request
	    
	    //do request
		function doRetrieve() {
			requestStart = Date.now();
	   		UserResource.retrieve(vm.retrieveData)
			    .then(
			    		//retrieve success
			    		function(data) { console.log('user retrieve success'); },
			    		//retrieve error
			    		function(data) { console.log('user retrieve error'); }
			    );
		};
		
		//confirm callback
		function subUserRetrieveConfirmedCallback(data) { 
			requestEnd = Date.now();
			console.log('subUserRetrieveConfirmed'); 
			vm.retrieveRequests.push({requestStart:requestStart, requestEnd:requestEnd, requestDuration:requestEnd-requestStart, data:data});
		}
		//failed callback
		function subUserRetrieveFailedCallback(data) { 
			requestEnd = Date.now();
			console.log('subUserRetrieveFailed'); 
			vm.retrieveRequests.push({requestStart:requestStart, requestEnd:requestEnd,  requestDuration:requestEnd-requestStart, data:data});
		}
		
		//_____________________________________________________________________________________________________________________________________________

		//login request
	    
	    //do request
		function doLogin() {
			requestStart = Date.now();
	   		UserResource.login(vm.loginData)
			    .then(
			    		//login success
			    		function(data) { console.log('user login success'); },
			    		//login error
			    		function(data) { console.log('user login error'); }
			    );
		};
		
		//confirm callback
		function subUserLoginConfirmedCallback(data) { 
			requestEnd = Date.now();
			console.log('subUserLoginConfirmed'); 
			vm.loginRequests.push({requestStart:requestStart, requestEnd:requestEnd, requestDuration:requestEnd-requestStart, data:data});
		}
		//failed callback
		function subUserLoginFailedCallback(data) { 
			requestEnd = Date.now();
			console.log('subUserLoginFailed'); 
			vm.loginRequests.push({requestStart:requestStart, requestEnd:requestEnd,  requestDuration:requestEnd-requestStart, data:data});
		}
		
		//_____________________________________________________________________________________________________________________________________________
		
		//logout request
	    
	    //do request
		function doLogout() {
			requestStart = Date.now();
	   		UserResource.logout(vm.logoutData)
			    .then(
			    		//logout success
			    		function(data) { console.log('user logout success'); },
			    		//logout error
			    		function(data) { console.log('user logout error'); }
			    );
		};
		
		//confirm callback
		function subUserLogoutConfirmedCallback(data) { 
			requestEnd = Date.now();
			console.log('subUserLogoutConfirmed'); 
			vm.logoutRequests.push({requestStart:requestStart, requestEnd:requestEnd, requestDuration:requestEnd-requestStart, data:data});
		}
		//failed callback
		function subUserLogoutFailedCallback(data) { 
			requestEnd = Date.now();
			console.log('subUserLogoutFailed'); 
			vm.logoutRequests.push({requestStart:requestStart, requestEnd:requestEnd,  requestDuration:requestEnd-requestStart, data:data});
		}
		
		//_____________________________________________________________________________________________________________________________________________
		
		//token request
	    
	    //do token
		function doToken() {
			requestStart = Date.now();
	   		UserResource.token(vm.tokenData)
			    .then(
			    		//token success
			    		function(data) { console.log('user token success'); },
			    		//token error
			    		function(data) { console.log('user token error'); }
			    );
		};
		
		//confirm callback
		function subUserTokenConfirmedCallback(data) { 
			requestEnd = Date.now();
			console.log('subUserTokenConfirmed'); 
			vm.tokenRequests.push({requestStart:requestStart, requestEnd:requestEnd, requestDuration:requestEnd-requestStart, data:data});
		}
		//failed callback
		function subUserTokenFailedCallback(data) { 
			requestEnd = Date.now();
			console.log('subUserTokenFailed'); 
			vm.tokenRequests.push({requestStart:requestStart, requestEnd:requestEnd,  requestDuration:requestEnd-requestStart, data:data});
		}
		
		//_____________________________________________________________________________________________________________________________________________
		
		//create request
	    
	    //do create
		function doCreate() {
			requestStart = Date.now();
	   		UserResource.create(vm.createData)
			    .then(
			    		//create success
			    		function(data) { console.log('user create success'); },
			    		//create error
			    		function(data) { console.log('user create error'); }
			    );
		};
		
		//confirm callback
		function subUserCreateConfirmedCallback(data) { 
			requestEnd = Date.now();
			console.log('subUserCreateConfirmed'); 
			vm.createRequests.push({requestStart:requestStart, requestEnd:requestEnd, requestDuration:requestEnd-requestStart, data:data});
		}
		//failed callback
		function subUserCreateFailedCallback(data) { 
			requestEnd = Date.now();
			console.log('subUserCreateFailed'); 
			vm.createRequests.push({requestStart:requestStart, requestEnd:requestEnd,  requestDuration:requestEnd-requestStart, data:data});
		}
		
		//_____________________________________________________________________________________________________________________________________________
		
		//update request
	    
	    //do update
		function doUpdate() {
			requestStart = Date.now();
	   		UserResource.update(vm.updateData)
			    .then(
			    		//update success
			    		function(data) { console.log('user update success'); },
			    		//update error
			    		function(data) { console.log('user update error'); }
			    );
		};
		
		//confirm callback
		function subUserUpdateConfirmedCallback(data) { 
			requestEnd = Date.now();
			console.log('subUserUpdateConfirmed'); 
			vm.updateRequests.push({requestStart:requestStart, requestEnd:requestEnd, requestDuration:requestEnd-requestStart, data:data});
		}
		//failed callback
		function subUserUpdateFailedCallback(data) { 
			requestEnd = Date.now();
			console.log('subUserUpdateFailed'); 
			vm.updateRequests.push({requestStart:requestStart, requestEnd:requestEnd,  requestDuration:requestEnd-requestStart, data:data});
		}
		
		//_____________________________________________________________________________________________________________________________________________
		
		//delete request
	    
	    //do delete
		function doDelete() {
			requestStart = Date.now();
	   		UserResource.delete(vm.deleteData)
			    .then(
			    		//delete success
			    		function(data) { console.log('user delete success'); },
			    		//delete error
			    		function(data) { console.log('user delete error'); }
			    );
		};
		
		//confirm callback
		function subUserDeleteConfirmedCallback(data) { 
			requestEnd = Date.now();
			console.log('subUserDeleteConfirmed'); 
			vm.deleteRequests.push({requestStart:requestStart, requestEnd:requestEnd, requestDuration:requestEnd-requestStart, data:data});
		}
		//failed callback
		function subUserDeleteFailedCallback(data) { 
			requestEnd = Date.now();
			vm.deleteErrors = data;
			console.log('subUserDeleteFailed'); 
			vm.deleteRequests.push({requestStart:requestStart, requestEnd:requestEnd,  requestDuration:requestEnd-requestStart, data:data});
		}
		
		//_____________________________________________________________________________________________________________________________________________
		
		//index request
	    
	    //do index
		function doIndex() {
			requestStart = Date.now();
	   		UserResource.index(vm.indexData)
			    .then(
			    		//index success
			    		function(data) { console.log('user index success'); },
			    		//index error
			    		function(data) { console.log('user index error'); }
			    );
		};
		
		//confirm callback
		function subUserIndexConfirmedCallback(data) { 
			requestEnd = Date.now();
			console.log('subUserIndexConfirmed'); 
			vm.indexRequests.push({requestStart:requestStart, requestEnd:requestEnd, requestDuration:requestEnd-requestStart, data:data});
		}
		//failed callback
		function subUserIndexFailedCallback(data) { 
			requestEnd = Date.now();
			console.log('subUserIndexFailed'); 
			vm.indexRequests.push({requestStart:requestStart, requestEnd:requestEnd,  requestDuration:requestEnd-requestStart, data:data});
		}
		
		//_____________________________________________________________________________________________________________________________________________


		
	};
	
	

})();
