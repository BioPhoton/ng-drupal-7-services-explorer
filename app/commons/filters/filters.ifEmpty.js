;(function() {
    'use strict';

    angular
        .module('commons.filters.ifEmpty', [])
        .filter('ifEmpty', ifEmpty);


    //ifEmpty.$inject = [];

    /**
     *
     * provide a default value if original is not given
     *
     * example {{input | ifEmpty:0}}
     *
     */
    /** @ngInject */
    function ifEmpty() {
    	console.log('input, defaultValue'); 
        return function(input, defaultValue) {
        	console.log('input, defaultValue2'); 
            if (angular.isUndefined(input) || input === null || input === '') {
                return defaultValue;
            }

            return input;
        }

    };
    
})();

