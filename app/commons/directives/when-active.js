(function() {
    'use strict';

angular
    .module('commons.directives.whenActive', [])
    .directive('whenActive', whenActiveLinkFunction);

/** @ngInject */
function whenActiveLinkFunction($location) { 
	
	 return {
		  restrict : 'A',
		  scope: true,
		  link: function (scope, element, attr) {
			  var 	activeClass = "active",
			  		activeTrailClass = "active-trail";
			 
			  //scope.$on("$stateChangeSuccess", function (event, toState, toParams, fromState, fromParams) {});
			  
			  
			  scope.$on('$stateChangeSuccess', function () {
		        
		            var loc = "#"+$location.path(),
		            	href = (element.attr('ui-sref'))?element.attr('ui-sref'):(element.attr('href'))?element.attr('href'):'',
		            	state = href.indexOf(loc),
		            	substate = -1;

		            if(href.length > 3) { substate = loc.indexOf(href) }
		            if (loc.length == 2) { state = -1 }
		            //console.log("Is Loc: "+loc+" in Href: "+href+" = "+state+" and Substate = "+substate);

		            if (state != -1 || substate != -1) {
		              element.addClass(activeClass);
		              element.parent().addClass(activeTrailClass);
		            }
		            else if (href == '#' && loc == '#/') {
		             element.addClass(activeClass);
		              element.parent().addClass(activeTrailClass);
		            }
		            else {
		              element.removeClass(activeClass);
		              element.parent().removeClass(activeTrailClass);
		            }
		      });     
		  }
	  };
	  
};

whenActiveLinkFunction.$inject = ['$location'];

})();
