;(function() {
    'use strict';


angular
    .module('ngDrupalServicesTests.home.controller', [])
    .controller('HomeController', HomeController);

	HomeController.$inject = [	'DrupalApiConstant',
								'UserResourceConstant',
		'FileResourceConstant',
		'CommentResourceConstant',
		'SystemResourceConstant',
		'NodeResourceConstant',
		'MenuResourceConstant',
		'DefinitionResourceConstant',
		'TaxonomyTermResourceConstant',
		'TaxonomyVocabularyResourceConstant',
		'GeocoderResourceConstant',
		'ViewsResourceConstant'];

	/** @ngInject */ 
	function HomeController(DrupalApiConstant, UserResourceConstant,
		FileResourceConstant,
							CommentResourceConstant,
		SystemResourceConstant,
		NodeResourceConstant,
		MenuResourceConstant,
		DefinitionResourceConstant,
		TaxonomyTermResourceConstant,
		TaxonomyVocabularyResourceConstant,
		GeocoderResourceConstant,
		ViewsResourceConstant )
	{ 
		// jshint validthis: true 
		var vm = this;

		vm.resourcesCollapsed = true;
		vm.resources = false;

	    vm.drupal_instance;
		vm.api_endpoint;

		vm.resources = {};



		vm.setCustomSettings = setCustomSettings;

		///////////////////////

		init();
		//_____________________________________________________________________________________________________________________________________________

		function init() {
			vm.drupal_instance = DrupalApiConstant.drupal_instance;
			vm.api_endpoint = DrupalApiConstant.api_endpoint;

			vm.resources.comment = CommentResourceConstant.resourcePath;
			vm.resources.user = UserResourceConstant.resourcePath;
			vm.resources.system = SystemResourceConstant.resourcePath;
			vm.resources.node = NodeResourceConstant.resourcePath;
			vm.resources.taxonomy_term = TaxonomyTermResourceConstant.resourcePath;
			vm.resources.taxonomy_vocabulary = TaxonomyVocabularyResourceConstant.resourcePath;
			vm.resources.file = FileResourceConstant.resourcePath;
			vm.resources.definitions = DefinitionResourceConstant.resourcePath;
			vm.resources.menu = MenuResourceConstant.resourcePath;
			vm.resources.geocoder = GeocoderResourceConstant.resourcePath;
			vm.resources.views = ViewsResourceConstant.resourcePath;
		}

		function setCustomSettings() {
			DrupalApiConstant.drupal_instance = vm.drupal_instance;
			DrupalApiConstant.api_endpoint = vm.api_endpoint;

			CommentResourceConstant.resourcePath = vm.resources.comment;
			UserResourceConstant.resourcePath = vm.resources.user;
			SystemResourceConstant.resourcePath = vm.resources.system;
			NodeResourceConstant.resourcePath = vm.resources.node;
			TaxonomyTermResourceConstant.resourcePath= vm.resources.taxonomy_term;
			TaxonomyVocabularyResourceConstant.resourcePath = vm.resources.taxonomy_vocabulary;
			FileResourceConstant.resourcePath = vm.resources.file;
			DefinitionResourceConstant.resourcePath = vm.resources.definitions;
			MenuResourceConstant.resourcePath = vm.resources.menu;
			GeocoderResourceConstant.resourcePath = vm.resources.geocoder;
			ViewsResourceConstant.resourcePath = vm.resources.views;

		}
	};

})();
