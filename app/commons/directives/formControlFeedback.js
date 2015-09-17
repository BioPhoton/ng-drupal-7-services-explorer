;(function() {
    'use strict';

    angular
        .module('commons.directives.formControlFeedback', [])
        .directive('formControlFeedback', formControlFeedback);


    //formControlFeedback.$inject = [''];

    /** @ngInject */
    function formControlFeedback() {

        return {
            // restrict to an element type.
            restrict: 'E',
            replace: true,
            template:'<span class="glyphicon glyphicon-remove form-control-feedback"></span>',
        };


    };


})();