;(function() {
    'use strict';

    angular
        .module('commons.directives.startsWith', [])
        .directive('startsWith', startsWith);


    //startsWith.$inject = [''];

    /** @ngInject */
    function startsWith() {

        return {
            // restrict to an attribute type.
            restrict: 'A',
            // element must have ng-model attribute.
            require: 'ngModel',
            link: function(scope, ele, attrs, ctrl){

                // add a parser that will process each time the value is
                // parsed into the model when the user updates it.
                ctrl.$parsers.unshift(function(value) {
                    if(value){
                        // test and set the validity after update.
                    	 var regexp = new RegExp('^'+attrs.startsWith), 
                     		 valid = !regexp.test(value);
                        ctrl.$setValidity('starts-with', valid);
                    }

                    // if it's valid, return the value to the model,
                    // otherwise return undefined.
                    return valid ? value : undefined;
                });
            }

        };


    };


})();

