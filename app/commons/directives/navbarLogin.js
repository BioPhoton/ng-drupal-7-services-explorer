;(function() {
    'use strict';

    angular
        .module('commons.directives.navbarLogin', ['ngDrupal7Services-3_x.commons.authentication.service', 'ngDrupal7Services-3_x.commons.authentication.channel', 'ngDrupal7Services-3_x.commons.authentication.serviceConstant'])
        .directive('navbarLogin', navbarLogin);


    navbarLogin.$inject = ['AuthenticationService', 'AuthenticationChannel', 'AuthenticationServiceConstant'];

    /** @ngInject */
    function navbarLogin(AuthenticationService, AuthenticationChannel, AuthenticationServiceConstant) {
    	
    	var navbarLoginform = 
	    			'<div class="navbar-right">'+
		    			'<form toggle-by-accesslevel="{{accessLevels.anon}}" class="navbar-form navbar-right" name="navbarLoginForm" id="navbar-login" novalidate>' +
				    		'<div class="form-group" ng-class="{ \'has-error\' : navbarLoginForm.username.$touched && navbarLoginForm.username.$invalid || navbarLoginForm.username.$invalid && navbarLoginForm.$submitted}">' +
				    			'<input type="text" class="form-control" name="username" id="navbarLogin__username" placeholder="Username" ng-model="ngModel.navbarLoginData.username" ng-maxlength="60" required>' +
				    		'</div> ' +
				    		'<div class="form-group" ng-class="{ \'has-error\': navbarLoginForm.password.$touched && navbarLoginForm.password.$invalid || navbarLoginForm.password.$invalid && navbarLoginForm.$submitted}">' +
				    			'<input type="password" class="form-control" name="password" id="navbarLogin__password" placeholder="Password" ng-model="ngModel.navbarLoginData.password" required>' +
				    		'</div> '+
				    		'<button class="btn btn-primary" ng-click="doLogin(navbarLoginForm)">Login</button>' +
				    	'</form>'+
				    	'<ul id="navbar-user" class="nav navbar-nav"  toggle-by-accesslevel="{{accessLevels.user}}">'+
				    		'<li class="dropdown" dropdown>'+
				    			'<a href="#" dropdown-toggle>'+
				    				'<span class="glyphicon glyphicon-user"></span> {{username}} <b class="caret"></b>'+
				    			'</a>'+
				    			'<ul class="dropdown-menu">'+
			                        '<li class="divider"></li>'+
			                        '<li><a href="#" ng-click="doLogout()"><span class="glyphicon glyphicon-off"> </span>Logout</a></li>'+
			                    '</ul>'+
			                 '</li>'+
				    	'</ul>'+
			    	'</div>';
		    	    	
        return {
            // restrict to an element type.
            restrict: 'E',
            replace: true,
            template: navbarLoginform,
            link : function linkFunction(scope, ele, attrs, ctrl) {
            	
            	scope.accessLevels = AuthenticationServiceConstant.accessLevels;
            	scope.doLogin = doLogin;
            	scope.doLogout = doLogout;

            	AuthenticationChannel.subAuthenticationCurrentUserUpdated(scope, currentUserUpdatedHandler);
                
            	///////////////////////////////
            	
            	function doLogin(navbarLoginForm) {
	
            		if(navbarLoginForm.$valid) {		
            			AuthenticationService.login(scope.ngModel.navbarLoginData)
		    			    .then(
		    			    		//login success
		    			    		function(data) { 
		    			    			scope.ngModel.navbarLoginData = {};
						    			navbarLoginForm.$setPristine();
						    			navbarLoginForm.$setUntouched();
		    			    		}
		    			    );
            		}
            		
            	};
            	
            	function doLogout() {
            		AuthenticationService.logout();
            	};
            	
            	function currentUserUpdatedHandler(user){
                 	scope.username = user.name;
                };
            }
           
            
        };

    };
    


})();