;(function() {
    'use strict';

    angular
        .module('commons.directives.drupalIllegalChar', [])
        .directive('drupalIllegalChar', drupalIllegalChar);


    //drupalIllegalChar.$inject = [''];

    /** @ngInject */
    function drupalIllegalChar() {

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
                        var regexp1 = /[^\x{80}-\x{F7} a-z0-9@_.\'-]/,
	                        regexp2 = 	/[\x{80}-\x{A0} . // Non-printable ISO-8859-1 + NBSP
	                            	    \x{AD} . // Soft-hyphen
			                            \x{2000}-\x{200F} . // Various space characters
			                            \x{2028}-\x{202F} . // Bidirectional text overrides
			                            \x{205F}-\x{206F} . // Various text hinting characters
			                            \x{FEFF} . // Byte order mark
			                            \x{FF01}-\x{FF60} . // Full-width latin
			                            \x{FFF9}-\x{FFFD} . // Replacement characters
			                            \x{0}-\x{1F}]/u,
			                            
                    	valid = regexp1.test(value, 'i');
                        
                        ctrl.$setValidity('drupal-illegal-char', valid);
                    }

                    // if it's valid, return the value to the model,
                    // otherwise return undefined.
                    return valid ? value : undefined;
                });
            }

        };


    };


})();