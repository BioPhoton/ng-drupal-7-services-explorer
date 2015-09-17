;(function() {
    'use strict';

    angular
        .module('commons.directives.contains', [])
        .directive('contains', contains);


    //contains.$inject = [''];

    /** @ngInject */
    function contains() {

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
                        var regexp = new RegExp(attrs.contains), 
                    	valid = regexp.test(value);
                        
                        ctrl.$setValidity('contains', valid);
                    }

                    // if it's valid, return the value to the model,
                    // otherwise return undefined.
                    return valid ? value : undefined;
                });
            }

        };


    };


})();