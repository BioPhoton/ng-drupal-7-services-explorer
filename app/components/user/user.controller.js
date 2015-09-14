;(function() {
    'use strict';


angular
    .module('ngDrupalServicesTests.user.controller', ['ngDrupal7Services-3_x.resources.user.resource', 'ngDrupal7Services-3_x.resources.user.channel', 'ngDrupal7Services-3_x.commons.helperService'])
    .controller('UserController', UserController);

	UserController.$inject = ['$scope', 'UserResource', 'UserChannel', 'DrupalHelperService'];

	/** @ngInject */ 
	function UserController($scope, UserResource, UserChannel, DrupalHelperService) { 
		
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
		//test request and event callbacks
		vm.doRetrieve = doRetrieve;
		//test the retrieve on confirm event
		UserChannel.subRetrieveConfirmed($scope, subRetrieveConfirmedCallback);
		//test the retrieve on failed event
	    UserChannel.subRetrieveFailed($scope, subRetrieveFailedCallback);

	    //__________________________________________________________________________________________________
	    
	    //login request
		
		//store requests
		vm.loginRequests = [];
		vm.loginData = {
				uid : ''
		};
		//test request and event callbacks
		vm.doLogin = doLogin;
		//test the login on confirm event
		UserChannel.subLoginConfirmed($scope, subLoginConfirmedCallback);
		//test the login on failed event
	    UserChannel.subLoginFailed($scope, subLoginFailedCallback);

	    //__________________________________________________________________________________________________
	    
	    //logout request
		
		//store requests
		vm.logoutRequests = [];

		//test request and event callbacks
		vm.doLogout = doLogout;
		//test the token on confirm event
		UserChannel.subLogoutConfirmed($scope, subLogoutConfirmedCallback);
		//test the token on failed event
	    UserChannel.subLogoutFailed($scope, subLogoutFailedCallback);

	    //__________________________________________________________________________________________________
	    
	    //token request
		
		//store requests
		vm.tokenRequests = [];

		//test request and event callbacks
		vm.doToken = doToken;
		//test the token on confirm event
		UserChannel.subTokenConfirmed($scope, subTokenConfirmedCallback);
		//test the token on failed event
	    UserChannel.subTokenFailed($scope, subTokenFailedCallback);

	    //__________________________________________________________________________________________________
	    
	    //create request
		
		//store requests
		vm.createRequests = [];
		vm.createData = {
				name : 's',
				pass: 's',
				mail : 's@s.at'
		};
		//test request and event callbacks
		vm.doCreate = doCreate;
		//test the create on confirm event
		UserChannel.subCreateConfirmed($scope, subCreateConfirmedCallback);
		//test the create on failed event
	    UserChannel.subCreateFailed($scope, subCreateFailedCallback);

	    //__________________________________________________________________________________________________
	    
	    //update request
		
		//store requests
		vm.updateRequests = [];
		vm.updateData = {};
		//test request and event callbacks
		vm.doUpdate = doUpdate;
		//test the update on confirm event
		UserChannel.subUpdateConfirmed($scope, subUpdateConfirmedCallback);
		//test the update on failed event
	    UserChannel.subUpdateFailed($scope, subUpdateFailedCallback);

	    //__________________________________________________________________________________________________
	    
	    //delete request
		
		//store requests
		vm.deleteRequests = [];
		vm.deleteErrors = {}
		vm.deleteData = {
				uid : '',
		};
		//test request and event callbacks
		vm.doDelete = doDelete;
		//test the delete on confirm event
		UserChannel.subDeleteConfirmed($scope, subDeleteConfirmedCallback);
		//test the delete on failed event
	    UserChannel.subDeleteFailed($scope, subDeleteFailedCallback);

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
		//test request and event callbacks
		vm.doIndex = doIndex;
		//test the index on confirm event
		UserChannel.subIndexConfirmed($scope, subIndexConfirmedCallback);
		//test the index on failed event
	    UserChannel.subIndexFailed($scope, subIndexFailedCallback);

	    //__________________________________________________________________________________________________
	    
	    //register request
		
		//store requests
		vm.registerRequests = [];
		vm.registerData = {
				name : 's',
				pass: 's',
				mail : 's@s.at'
		};
		//test request and event callbacks
		vm.doRegister = doRegister;
		//test the register on confirm event
		UserChannel.subRegisterConfirmed($scope, subRegisterConfirmedCallback);
		//test the register on failed event
	    UserChannel.subRegisterFailed($scope, subRegisterFailedCallback);

	    //__________________________________________________________________________________________________
	    
	    //resendWelcomeEmail request
		
		//store requests
		vm.resendWelcomeEmailRequests = [];
		vm.resendWelcomeEmailData = {
				uid : ''
		};
		//test request and event callbacks
		vm.doResendWelcomeEmail = doResendWelcomeEmail;
		//test the register on confirm event
		UserChannel.subResendWelcomeEmailConfirmed($scope, subResendWelcomeEmailConfirmedCallback);
		//test the register on failed event
	    UserChannel.subResendWelcomeEmailFailed($scope, subResendWelcomeEmailFailedCallback);

	    //__________________________________________________________________________________________________
	    
	    //cancel request
		
		//store requests
		vm.cancelRequests = [];
		vm.cancelData = {
				name : 's',
				pass: 's',
				mail : 's@s.at'
		};
		//test request and event callbacks
		vm.doCancel = doCancel;
		//test the cancel on confirm event
		UserChannel.subCancelConfirmed($scope, subCancelConfirmedCallback);
		//test the cancel on failed event
	    UserChannel.subCancelFailed($scope, subCancelFailedCallback);

	    //__________________________________________________________________________________________________
	    
	    //passwordReset request
		
		//store requests
		vm.passwordResetRequests = [];
		vm.passwordResetData = {
				name : 's',
				pass: 's',
				mail : 's@s.at'
		};
		//test request and event callbacks
		vm.doPasswordReset = doPasswordReset;
		//test the passwordReset on confirm event
		UserChannel.subPasswordResetConfirmed($scope, subPasswordResetConfirmedCallback);
		//test the passwordReset on failed event
	    UserChannel.subPasswordResetFailed($scope, subPasswordResetFailedCallback);

	    //__________________________________________________________________________________________________
	    
	    //requestNewPassword request
		
		//store requests
		vm.requestNewPasswordRequests = [];
		vm.requestNewPasswordData = {
				uid : ''
		};
		//test request and event callbacks
		vm.doRequestNewPassword = doRequestNewPassword;
		//test the requestNewPassword on confirm event
		UserChannel.subRequestNewPasswordConfirmed($scope, subRequestNewPasswordConfirmedCallback);
		//test the requestNewPassword on failed event
	    UserChannel.subRequestNewPasswordFailed($scope, subRequestNewPasswordFailedCallback);

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
		function subRetrieveConfirmedCallback(data) { 
			requestEnd = Date.now();
			console.log('subRetrieveConfirmed'); 
			vm.retrieveRequests.push({requestStart:requestStart, requestEnd:requestEnd, requestDuration:requestEnd-requestStart, data:data});
		}
		//failed callback
		function subRetrieveFailedCallback(data) { 
			requestEnd = Date.now();
			console.log('subRetrieveFailed'); 
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
		function subLoginConfirmedCallback(data) { 
			requestEnd = Date.now();
			console.log('subLoginConfirmed'); 
			vm.loginRequests.push({requestStart:requestStart, requestEnd:requestEnd, requestDuration:requestEnd-requestStart, data:data});
		}
		//failed callback
		function subLoginFailedCallback(data) { 
			requestEnd = Date.now();
			console.log('subLoginFailed'); 
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
		function subLogoutConfirmedCallback(data) { 
			requestEnd = Date.now();
			console.log('subLogoutConfirmed'); 
			vm.logoutRequests.push({requestStart:requestStart, requestEnd:requestEnd, requestDuration:requestEnd-requestStart, data:data});
		}
		//failed callback
		function subLogoutFailedCallback(data) { 
			requestEnd = Date.now();
			console.log('subLogoutFailed'); 
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
		function subTokenConfirmedCallback(data) { 
			requestEnd = Date.now();
			console.log('subTokenConfirmed'); 
			vm.tokenRequests.push({requestStart:requestStart, requestEnd:requestEnd, requestDuration:requestEnd-requestStart, data:data});
		}
		//failed callback
		function subTokenFailedCallback(data) { 
			requestEnd = Date.now();
			console.log('subTokenFailed'); 
			vm.tokenRequests.push({requestStart:requestStart, requestEnd:requestEnd,  requestDuration:requestEnd-requestStart, data:data});
		}
		
		//_____________________________________________________________________________________________________________________________________________
		
		//create request
	    
	    //do create
		function doCreate(createForm) {
			if(createForm.$valid) {
				
				console.log(vm.createData.field_nickname);
				vm.createData.field_nickname = DrupalHelperService.structureField(vm.createData.field_nickname);
				
				vm.createData.signature = DrupalHelperService.structureField(vm.createData.signature);
				
				console.log(vm.createData.field_nickname);
				requestStart = Date.now();
				UserResource.create(vm.createData)
					.then(
						//create success
						function(data) { console.log('user create success'); },
						//create error
						function(data) { console.log('user create error'); }
					);

			}
		};
		
		//confirm callback
		function subCreateConfirmedCallback(data) { 
			requestEnd = Date.now();
			console.log('subCreateConfirmed'); 
			vm.createRequests.push({requestStart:requestStart, requestEnd:requestEnd, requestDuration:requestEnd-requestStart, data:data});
		}
		//failed callback
		function subCreateFailedCallback(data) { 
			requestEnd = Date.now();
			console.log('subCreateFailed'); 
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
		function subUpdateConfirmedCallback(data) { 
			requestEnd = Date.now();
			console.log('subUpdateConfirmed'); 
			vm.updateRequests.push({requestStart:requestStart, requestEnd:requestEnd, requestDuration:requestEnd-requestStart, data:data});
		}
		//failed callback
		function subUpdateFailedCallback(data) { 
			requestEnd = Date.now();
			console.log('subUpdateFailed'); 
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
		function subDeleteConfirmedCallback(data) { 
			requestEnd = Date.now();
			console.log('subDeleteConfirmed'); 
			vm.deleteRequests.push({requestStart:requestStart, requestEnd:requestEnd, requestDuration:requestEnd-requestStart, data:data});
		}
		//failed callback
		function subDeleteFailedCallback(data) { 
			requestEnd = Date.now();
			vm.deleteErrors = data;
			console.log('subDeleteFailed'); 
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
		function subIndexConfirmedCallback(data) { 
			requestEnd = Date.now();
			console.log('subIndexConfirmed'); 
			vm.indexRequests.push({requestStart:requestStart, requestEnd:requestEnd, requestDuration:requestEnd-requestStart, data:data});
		}
		//failed callback
		function subIndexFailedCallback(data) { 
			requestEnd = Date.now();
			console.log('subIndexFailed'); 
			vm.indexRequests.push({requestStart:requestStart, requestEnd:requestEnd,  requestDuration:requestEnd-requestStart, data:data});
		}
		
		//_____________________________________________________________________________________________________________________________________________
		
		//register request
	    
	    //do request
		function doRegister() {
			requestStart = Date.now();
	   		UserResource.register(vm.registerData)
			    .then(
		    		//register success
		    		function(data) { console.log('user register success'); },
		    		//register error
		    		function(data) { console.log('user register error'); }
			    );
		};
		
		//confirm callback
		function subRegisterConfirmedCallback(data) { 
			requestEnd = Date.now();
			console.log('subRegisterConfirmed'); 
			vm.registerRequests.push({requestStart:requestStart, requestEnd:requestEnd, requestDuration:requestEnd-requestStart, data:data});
		}
		//failed callback
		function subRegisterFailedCallback(data) { 
			requestEnd = Date.now();
			console.log('subRegisterFailed'); 
			vm.registerRequests.push({requestStart:requestStart, requestEnd:requestEnd,  requestDuration:requestEnd-requestStart, data:data});
		}
		
		//_____________________________________________________________________________________________________________________________________________
		
		//resendWelcomeEmail request
	    
	    //do request
		function doResendWelcomeEmail() {
			console.log('ASDF'); 
			requestStart = Date.now();
	   		UserResource.resendWelcomeEmail(vm.resendWelcomeEmailData)
			    .then(
		    		//resendWelcomeEmail success
		    		function(data) { console.log('user resendWelcomeEmail success'); },
		    		//resendWelcomeEmail error
		    		function(data) { console.log('user resendWelcomeEmail error'); }
			    );
		};
		
		//confirm callback
		function subResendWelcomeEmailConfirmedCallback(data) { 
			requestEnd = Date.now();
			console.log('subResendWelcomeEmailConfirmed'); 
			vm.resendWelcomeEmailRequests.push({requestStart:requestStart, requestEnd:requestEnd, requestDuration:requestEnd-requestStart, data:data});
		}
		//failed callback
		function subResendWelcomeEmailFailedCallback(data) { 
			requestEnd = Date.now();
			console.log('subResendWelcomeEmailFailed'); 
			vm.resendWelcomeEmailRequests.push({requestStart:requestStart, requestEnd:requestEnd,  requestDuration:requestEnd-requestStart, data:data});
		}
		
		//_____________________________________________________________________________________________________________________________________________

		//cancel request
	    
	    //do request
		function doCancel() {
			requestStart = Date.now();
	   		UserResource.cancel(vm.cancelData)
			    .then(
		    		//cancel success
		    		function(data) { console.log('user cancel success'); },
		    		//cancel error
		    		function(data) { console.log('user cancel error'); }
			    );
		};
		
		//confirm callback
		function subCancelConfirmedCallback(data) { 
			requestEnd = Date.now();
			console.log('subCancelConfirmed'); 
			vm.cancelRequests.push({requestStart:requestStart, requestEnd:requestEnd, requestDuration:requestEnd-requestStart, data:data});
		}
		//failed callback
		function subCancelFailedCallback(data) { 
			requestEnd = Date.now();
			console.log('subCancelFailed'); 
			vm.cancelRequests.push({requestStart:requestStart, requestEnd:requestEnd,  requestDuration:requestEnd-requestStart, data:data});
		}
		
		//_____________________________________________________________________________________________________________________________________________
		
		//passwordReset request
	    
	    //do request
		function doPasswordReset() {
			requestStart = Date.now();
	   		UserResource.passwordReset(vm.passwordResetData)
			    .then(
		    		//passwordReset success
		    		function(data) { console.log('user passwordReset success'); },
		    		//passwordReset error
		    		function(data) { console.log('user passwordReset error'); }
			    );
		};
		
		//confirm callback
		function subPasswordResetConfirmedCallback(data) { 
			requestEnd = Date.now();
			console.log('subPasswordResetConfirmed'); 
			vm.passwordResetRequests.push({requestStart:requestStart, requestEnd:requestEnd, requestDuration:requestEnd-requestStart, data:data});
		}
		//failed callback
		function subPasswordResetFailedCallback(data) { 
			requestEnd = Date.now();
			console.log('subPasswordResetFailed'); 
			vm.passwordResetRequests.push({requestStart:requestStart, requestEnd:requestEnd,  requestDuration:requestEnd-requestStart, data:data});
		}
		
		//_____________________________________________________________________________________________________________________________________________
		
		//requestNewPassword request
	    
	    //do request
		function doRequestNewPassword() {
			requestStart = Date.now();
	   		UserResource.requestNewPassword(vm.requestNewPasswordData)
			    .then(
		    		//passwordReset success
		    		function(data) { console.log('user requestNewPassword success'); },
		    		//passwordReset error
		    		function(data) { console.log('user requestNewPassword error'); }
			    );
		};
		
		//confirm callback
		function subRequestNewPasswordConfirmedCallback(data) { 
			requestEnd = Date.now();
			console.log('subRequestNewPasswordConfirmed'); 
			vm.requestNewPasswordRequests.push({requestStart:requestStart, requestEnd:requestEnd, requestDuration:requestEnd-requestStart, data:data});
		}
		//failed callback
		function subRequestNewPasswordFailedCallback(data) { 
			requestEnd = Date.now();
			console.log('subRequestNewPasswordFailed'); 
			vm.requestNewPasswordRequests.push({requestStart:requestStart, requestEnd:requestEnd,  requestDuration:requestEnd-requestStart, data:data});
		}
		
		//_____________________________________________________________________________________________________________________________________________
		
	};
	
	

})();
