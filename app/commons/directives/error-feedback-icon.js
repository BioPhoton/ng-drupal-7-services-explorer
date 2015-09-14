;(function() {
    'use strict';

    angular
        .module('commons.directives.errorFeedbackIcon', [])
        .directive('errorFeedbackIcon', errorFeedbackIcon);


    //errorFeedbackIcon.$inject = [''];

    /** @ngInject */
    function errorFeedbackIcon() {

        return {
            // restrict to an attribute type.
            restrict: 'E',

            // element must have ng-model attribute.
            require: 'ngModel',
            link: function(scope, ele, attrs, ctrl) {


            }

        };


    };


})();