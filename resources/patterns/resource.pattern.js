/**
 * xxx
 * 
 * Returns the value of a yyy variable using variable_get().
 * 
 * Method: POST
 * Url: http://drupal_instance/api_endpoint/yyy/xxx
 * 
 * @params  {Object} data the requests data
 * 			@key 	{String} var1 The name of the variable to return, required:true, source:post body
 * 			@key 	{String} var2 The default value to use if this variable has never been set, required:false, source:post body
 * 
 * @return 	{Promise}
 *
**/
function xxx(data){
	
	//undefined check
	data = (data)?data:{};
	
	//validation of params
	var errors = [],
	defer = $q.defer();	

	//basic validation
	if(!data.name) { 
		errors.push('Param name is required.');
	}
	
	if(errors.length != 0) {
		YYYChannel.pubYYYXXXFailed(errors);
		defer.reject(errors); 
		return defer.promise;
	}
	
	var getVariablePath = DrupalApiConstant.drupal_instance + DrupalApiConstant.api_endpoint + YYYResourceConstant.resourcePath + '/' + YYYResourceConstant.actions.xxx,
		requestConfig = {
				url 	: getVariablePath,
				method 	:'POST',
				data 	: {
					name : data.name,
				}
		};
	
	//set default if given
	if(data.default) {
		requestConfig.data['default'] = data.default;
	}

	return $http(requestConfig)
		.success(function(responseData, status, headers, config){
			YYYChannel.pubYYYXXXConfirmed(responseData);
			return responseData;
		})
		.error(function(responseData, status, headers, config){
			YYYChannel.pubYYYXXXFailed(responseData);
			return responseData;
		});

};