// i.e. 
// YYY = User, yyy = user, 
// XXX Retrieve, xxx = retrieve

//yyy xxx request
pubYYYXXXConfirmed 		: pubYYYXXXConfirmed,
subYYYXXXConfirmed		: subYYYXXXConfirmed,
pubYYYXXXFailed 		: pubYYYXXXFailed,
subYYYXXXFailed			: subYYYXXXFailed,

//YYY xxx request functions

/**
 * pubYYYXXXConfirmed
 * 
 * Publish the YYYXXXConfirmed event with giver args 
 *
 * @param 	{Object} args The events arguments 
 * 
 * 
**/
function pubYYYXXXConfirmed(args) {
	var args = args;
	console.log('channel pubYYYXXXConfirmed'); 
	BaseChannel.pubRootEmit(YYYChannelConstant.yyy_xxxConfirmed, args);
};

/**
 * subYYYXXXConfirmed
 * 
 * subscribe for the YYYXXXConfirmed event
 *
 * @param 	{Object} _Scope The scope that calls the channels subYYYXXXConfirmed function
 * @param 	{function} scopeHandler The callback handler for YYYXXXConfirmed event
 * 
 * @return 	{function} The unsubscribe function from the $rootScope.on() call
 * 
**/
function subYYYXXXConfirmed(_Scope, scopeHandler) {
	var prepArgs = function (args) {
		return args; 
	};
	
	var unsubsSopeHandler = BaseChannel.subRootEmit( YYYChannelConstant.yyy_xxxConfirmed, _Scope, scopeHandler, prepArgs);
	
	return unsubsSopeHandler;
};

//###############


/**
 * pubYYYXXXConfirmed
 * 
 * Publish the YYYXXXConfirmed event with giver args 
 *
 * @param 	{Object} args The events arguments 
 * 
 * 
**/
function pubYYYXXXFailed(args) {
	var args = {errors: args};
	console.log('channel pubYYYXXXFailed'); 
	BaseChannel.pubRootEmit(YYYChannelConstant.yyy_xxxFailed, args);
};

/**
 * subYYYXXXFailed
 * 
 * subscribe for the YYYXXXFailed event
 *
 * @param 	{Object} _Scope The scope that calls the channels subYYYXXXFailed function
 * @param 	{function} scopeHandler The callback handler for YYYXXXFailed event
 * 
 * @return 	{function} The unsubscribe function from the $rootScope.on() call
 * 
**/
function subYYYXXXFailed(_Scope, scopeHandler) {
	var prepArgs = function (args) { 
		return args; 
	};
	
	var unsubsSopeHandler = BaseChannel.subRootEmit( YYYChannelConstant.yyy_xxxFailed, _Scope, scopeHandler, prepArgs);
	
	return unsubsSopeHandler;
};

//________________________________________________________________________________________________________________________________________