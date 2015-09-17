module.exports = {
  bundle: {
    main : {
    	scripts : [
           //commons
           './app/commons/directives/formControlFeedback.js',
           //app component files 
           './app/components/home/home.controller.js',
           './app/components/auth/auth.controller.js',
           './app/components/system/system.controller.js',
           './app/components/user/user.controller.js',
           //app files 
           './app/app.controller.js',
           './app/app.states.js',
           './app/app.config.js',
           './app/app.js',
    	   ]
    },
    vendor: {
      scripts: [
        //angular and modules
        './bower_components/angular/angular.js',
        './bower_components/angular-ui-router/release/angular-ui-router.js',
        './bower_components/angular-cookies/angular-cookies.js',
        './bower_components/angular-messages/angular-messages.js',
        
        //third party libs
        './bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js',
       
        //ng-drupal-7-services
        './bower_components/ng-drupal-7-services/commons/commons.drupalApiConfig.js',
        './bower_components/ng-drupal-7-services/commons/commons.helperService.js',
        './bower_components/ng-drupal-7-services/commons/commons.validationConstant.js',
        './bower_components/ng-drupal-7-services/commons/commons.baseChannel.js',
        './bower_components/ng-drupal-7-services/commons/commons.baseResource.js',
        './bower_components/ng-drupal-7-services/commons/http/http.configurations.js',
        './bower_components/ng-drupal-7-services/commons/http/http.requestAcceptIntercepter.js',
        './bower_components/ng-drupal-7-services/commons/authentication/authentication.httpIntercepter.js',
        './bower_components/ng-drupal-7-services/commons/authentication/authentication.channelConstant.js',
        './bower_components/ng-drupal-7-services/commons/authentication/authentication.channel.js',
        './bower_components/ng-drupal-7-services/commons/authentication/authentication.serviceConstant.js',
        './bower_components/ng-drupal-7-services/commons/authentication/authentication.service.js',
        './bower_components/ng-drupal-7-services/resources/system/system.resourceConstant.js',
        './bower_components/ng-drupal-7-services/resources/system/system.resource.js',
        './bower_components/ng-drupal-7-services/resources/system/system.channelConstant.js',
        './bower_components/ng-drupal-7-services/resources/system/system.channel.js',
        './bower_components/ng-drupal-7-services/resources/user/user.resourceConstant.js',
        './bower_components/ng-drupal-7-services/resources/user/user.resource.js',
        './bower_components/ng-drupal-7-services/resources/user/user.channelConstant.js',
        './bower_components/ng-drupal-7-services/resources/user/user.channel.js'
        
        ]
    }
  }
};
