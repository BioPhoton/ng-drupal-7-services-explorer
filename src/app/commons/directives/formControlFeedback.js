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
            require: '^form',
            template:'<span class="glyphicon glyphicon-remove form-control-feedback"></span>',
            link : function(scope, elem, attrs, form) {
            	
            	var formElem = elem.parent().find('input'),
            		formElemName = formElem.attr('name'),
            		prevDisp = formElem.css('display');
            	
            	scope.$watch( form.$name + '.' + formElemName + '.$valid', function(newVal) {
            	
            		if(!newVal) {
            			elem.css('display', prevDisp);
            		} else {
            			elem.css('display', 'none');
            		}
            		
            	});
            	
            	
            	
            }
        };


    };


})();