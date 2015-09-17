;(function() {
    'use strict';

    angular
        .module('commons.directives.navbarLogin', [])
        .directive('navbarLogin', navbarLogin);


    //navbarLogin.$inject = [''];

    /** @ngInject */
    function navbarLogin() {

    	/*var navbarLoginform = 
    		<form class="navbar-form navbar-right" name="navbarLoginForm" novalidate> \
    	<div class="form-group" ng-class="{ 'has-error has-feedback': navbarLoginForm.username.$touched && navbarLoginForm.username.$invalid || navbarLoginForm.username.$invalid && navbarLoginForm.$submitted}">
    		<label for="navbarLogin__username">Username</label>
    		<input type="text" class="form-control" name="username" id="navbarLogin__username" placeholder="Name" ng-model="user.navbarLoginData.username" ng-maxlength="60" required>
    		<form-control-feedback></form-control-feedback>
    		<div class="help-block">
    			<p ng-if="!navbarLoginForm.username.$touched && !navbarLoginForm.$submitted || navbarLoginForm.username.$valid" >The user name</p>

    			<ng-messages ng-if="navbarLoginForm.username.$invalid && navbarLoginForm.username.$touched || navbarLoginForm.$submitted" for="navbarLoginForm.username.$error">
    				<ng-messages-include src="error-required"></ng-messages-include>
    				<div ng-message="maxlength">
    					Your username must be less than 61 characters long
    				</div>
    			</ng-messages>
    		</div>
    	</div>

    	<div class="form-group" ng-class="{ 'has-error has-feedback': navbarLoginForm.password.$touched && navbarLoginForm.password.$invalid || navbarLoginForm.password.$invalid && navbarLoginForm.$submitted}">
    		<label for="navbarLogin__password">Password</label>
    		<input type="password" class="form-control" name="password" id="navbarLogin__password" placeholder="Password" ng-model="user.navbarLoginData.password" required>
    		<form-control-feedback></form-control-feedback>
    		<div class="help-block">
    			<p class="description" ng-if="!navbarLoginForm.password.$touched && !navbarLoginForm.$submitted || navbarLoginForm.password.$valid">The plain text unencrypted password</p>
    			<ng-messages class="error" ng-if="navbarLoginForm.password.$invalid && navbarLoginForm.password.$touched || navbarLoginForm.$submitted" for="navbarLoginForm.password.$error">
    				<ng-messages-include src="error-required"></ng-messages-include>
    			</ng-messages>
    		</div>
    	</div>
    	<button class="btn btn-success" ng-click="user.doLogin(navbarLoginForm)">Login</button>
    	</form>*/
    	
        return {
            // restrict to an element type.
            restrict: 'E',
            replace: true,
            template: navbarLoginform,
        };


    };


})();