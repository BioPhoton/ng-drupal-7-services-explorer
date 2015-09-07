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
	
	var 	lastToState = "",
  			lastFromState = "",
  			classPrefix = 'animate-',
	  		containerClassName = "animate-perspective",
	  		pageClassname = "animate-view";
	
	 return {
		  restrict : 'A',
		  
		  link: function (scope, element, attr) {
			  var routAnimationClassName = "";
			  				  
			  init();
			  
			  ///////
			  
			  /**
			   * init 
			   * 
			   *  Initializes the divs css classes and eventlistening
			   */
			  function init() {
				  //set css classes
				  element.parent().addClass(containerClassName);
				  element.addClass(pageClassname);
				  //
				  scope.$on('$stateChangeSuccess', stateChangeFunction); 
			  }
			  
			  /**
			   * stateChangeFunction
			   * 
			   * @TODO description
			   * 
			   * @param event
			   * @param toState
			   * @param toParams
			   * @param fromState
			   * @param fromParams
			   * @returns
			   */
			  function stateChangeFunction(event, toState, toParams, fromState, fromParams) {
				 

				  if(routAnimationClassName != "") {
					  element.removeClass(classPrefix+routAnimationClassName);
				  }
		              
				  routAnimationClassName = getAnimationClass(toState, fromState);
		          element.addClass(classPrefix+routAnimationClassName);
		          
		          lastToState = toState;
				  lastFromState = fromState;
				  
		      }
			  
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

				  var aniClass = 'forward';
				  
				  if(toState.name == lastFromState.name) {
					  aniClass = 'backward';
				  }
				  
				  /*if(toState.name == 'home') {
					  aniClass = toState.name;
				  }*/
				  	  
				  if(fromState.name == '') { aniClass = 'init'; }

				  
				  return aniClass;
			  }
			  
		  }
	  };
	  
};

})();
