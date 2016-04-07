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
        return function(input, defaultValue) {
            if (angular.isUndefined(input) || input === null || input === '') {
                return defaultValue;
            }

            return input;
        }

    };
    
})();

