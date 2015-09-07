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
	var errors = [];	

	//basic validation
	//if not given
	if(!data) { errors.push('Param data is required.'); }

	
	if(errors.length != 0) {
		YYYChannel.pubYYYXXXFailed(errors);
		return $q.reject(errors);
	}
	
	var xxxPath = DrupalApiConstant.drupal_instance + DrupalApiConstant.api_endpoint + YYYResourceConstant.resourcePath + '/' + YYYResourceConstant.actions.xxx,
		requestConfig = {
				url 	: xxxPath,
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
		.error(function(responseError, status, headers, config){
			YYYChannel.pubYYYXXXFailed(responseError);
			return responseError;
		});

};