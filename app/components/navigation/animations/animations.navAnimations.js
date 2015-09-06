(function() {
    'use strict';

angular
    .module('components.navigation.animations.navAnimations', [])
    .directive('navAnimations', navAnimationsLinkFunction);

/**
 * Manually identify dependencies for minification-safe code
 * 
**/
//navAnimationsLinkFunction.$inject = ['something'];

/** @ngInject */
function navAnimationsLinkFunction() { 
	
	 return {
		  restrict : 'A',
		  scope: true,
		  link: function (scope, element, attr) {
			  var 	routAnimationClassName = ""
				  	classPrefix = 'animate-';
			  
			  scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
				  
				  if(routAnimationClassName != "") {
					  element.removeClass(classPrefix+routAnimationClassName);
				  }
		              
				  routAnimationClassName = getAnimationClass(toState, fromState);
		          element.addClass(classPrefix+routAnimationClassName);
		      }); 
			  
			  ///////
			  
			  /**
			   * getAnimationClass
			   * 
			   * returns the animation css class name for the next rout
			   * 
			   * @param toState 
			   * @param fromState 
			   * 
			   * @return {String} next animation as className 
			   * 
			   */
			  function getAnimationClass(toState, fromState) {
				  console.log(toState, fromState);
				  return "test";
			  }
			  
		  }
	  };
	  
};

})();
