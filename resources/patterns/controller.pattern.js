//xxx request
		
//store requests
vm.xxxRequests = [];
vm.xxxData = {
		uid : ''
};
//test request
vm.doXXX = doXXX;
//test the xxx on confirm event
YYYChannel.subYYYXXXConfirmed($scope, subYYYXXXConfirmedCallback);
//test the xxx on failed event
YYYChannel.subYYYXXXFailed($scope, subYYYXXXFailedCallback);

//__________________________________________________________________________________________________

//xxx request

//do request
function doXXX() {
	requestStart = Date.now();
		YYYResource.xxx(vm.xxxData)
	    .then(
	    		//xxx success
	    		function(data) { console.log('yyy xxx success'); },
	    		//xxx error
	    		function(data) { console.log('yyy xxx error'); }
	    );
};

//confirm callback
function subYYYXXXConfirmedCallback(data) { 
	requestEnd = Date.now();
	console.log('subYYYXXXConfirmed'); 
	vm.xxxRequests.push({requestStart:requestStart, requestEnd:requestEnd, requestDuration:requestEnd-requestStart, data:data});
}
//failed callback
function subYYYXXXFailedCallback(data) { 
	requestEnd = Date.now();
	console.log('subYYYXXXFailed'); 
	vm.xxxRequests.push({requestStart:requestStart, requestEnd:requestEnd,  requestDuration:requestEnd-requestStart, data:data});
}

//_____________________________________________________________________________________________________________________________________________
