var _={

};
_.once = function(fn){
  var invoked = false;
  var result;
  return function(){
    if(!invoked){ 
     invoked = true;
     result = fn();
    } 
    return result;
  }
}

_.memoize = function(fn,func){
	var cache = {};
	return function(arg){
		var cache_key;
		if(typeof func === 'function'){
			cache_key = func(arg);
		}else{
			cache_key = arg.toString();
		}
		
		if(!cache.hasOwnProperty(cache_key)){
			cache[cache_key] = fn.call(this,arg);
		}
		return cache[cache_key];
	}

}

_.bind = function(fn,context){
	return function(){
		return fn.apply(context);
	}
}

module.exports = _;
