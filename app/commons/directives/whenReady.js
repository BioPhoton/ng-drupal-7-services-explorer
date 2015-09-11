;(function() {
    'use strict';

angular
    .module('commons.directives.whenReady', [])
    .directive('whenReady', whenReady);


whenReady.$inject = ['$interpolate'];


/*
 * See http://stackoverflow.com/questions/14968690/sending-event-when-angular-js-finished-loading
 * 
 * The whenReady directive allows you to execute the content of a when-ready
 * attribute after the element is ready (i.e. when it's done loading all sub directives and DOM
 * content). See: http://stackoverflow.com/questions/14968690/sending-event-when-angular-js-finished-loading
 *
 * Execute multiple expressions in the when-ready attribute by delimiting them
 * with a semi-colon. when-ready="doThis(); doThat()"
 *
 * Optional: If the value of a wait-for-interpolation attribute on the
 * element evaluates to true, then the expressions in when-ready will be
 * evaluated after all text nodes in the element have been interpolated (i.e.
 * {{placeholders}} have been replaced with actual values).
 *
 * Optional: Use a ready-check attribute to write an expression that
 * specifies what condition is true at any given moment in time when the
 * element is ready. The expression will be evaluated repeatedly until the
 * condition is finally true. The expression is executed with
 * requestAnimationFrame so that it fires at a moment when it is least likely
 * to block rendering of the page.
 *
 * If wait-for-interpolation and ready-check are both supplied, then the
 * when-ready expressions will fire after interpolation is done *and* after
 * the ready-check condition evaluates to true.
 *
 * Caveats: if other directives exists on the same element as this directive
 * and destroy the element thus preventing other directives from loading, using
 * this directive won't work. The optimal way to use this is to put this
 * directive on an outer element.
 */
/** @ngInject */
function whenReady($interpolate) { 
	
	return {
	    restrict: 'A',
	    priority: Number.MIN_SAFE_INTEGER, // execute last, after all other directives if any.
	    link: function($scope, $element, $attributes) {
	      var expressions = $attributes.whenReady.split(';');
	      var waitForInterpolation = false;
	      var hasReadyCheckExpression = false;

	      function evalExpressions(expressions) {
	        expressions.forEach(function(expression) {
	          $scope.$eval(expression);
	        });
	      }

	      if ($attributes.whenReady.trim().length === 0) { return; }

	    if ($attributes.waitForInterpolation && $scope.$eval($attributes.waitForInterpolation)) {
	        waitForInterpolation = true;
	    }

	      if ($attributes.readyCheck) {
	        hasReadyCheckExpression = true;
	      }

	      if (waitForInterpolation || hasReadyCheckExpression) {
	        requestAnimationFrame(function checkIfReady() {
	          var isInterpolated = false;
	          var isReadyCheckTrue = false;

	          if (waitForInterpolation && $element.text().indexOf($interpolate.startSymbol()) >= 0) { // if the text still has {{placeholders}}
	            isInterpolated = false;
	          }
	          else {
	            isInterpolated = true;
	          }

	          if (hasReadyCheckExpression && !$scope.$eval($attributes.readyCheck)) { // if the ready check expression returns false
	            isReadyCheckTrue = false;
	          }
	          else {
	            isReadyCheckTrue = true;
	          }

	          if (isInterpolated && isReadyCheckTrue) { evalExpressions(expressions); }
	          else { requestAnimationFrame(checkIfReady); }

	        });
	      }
	      else {
	        evalExpressions(expressions);
	      }
	    }
	  };
	  
};

})();

