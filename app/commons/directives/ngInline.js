//thx to http://zachsnow.com/#!/blog/2014/angularjs-faster-ng-include/
;(function() {
    'use strict';

    angular
        .module('commons.directives.endsWith', [])
        .directive('ngInline', ngInline);

    ngInline.$inject = ['$templateCache'];

    /** @ngInject */
    function ngInline($templateCache) {

    	 return {
    	      restrict: 'A',
    	      priority: 400, // Same as ng-include.
    	      compile: function(element, attrs){
    	        var templateName = attrs.ngInline;
    	        if(!templateName){
    	          throw new Error('ngInline: expected template name');
    	        }
    	        var template = $templateCache.get(templateName);
    	     	  if(angular.isUndefined(template)){
    	          throw new Error('ngInline: unknown template ' + templateName);
    	        }

    	        element.html(template);
    	      }
    	    };

    };

})();