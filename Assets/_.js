#pragma strict

static function singleArray(begining : int, end : int) : Array {
	var array = new int[(end - begining)];
	for(var i = 0; i < array.length; i++){
		array[i] = i;
	}
	return array;
}

static function doubleArray(x : int, y : int) : Array{
	var array = new Array();
	for(var i = 0; i < x; i++){
		for(var j = 0; j < y; j++){
			array.Add(Vector2(i, j));
		}
	}	
	return array;
}

static function forEach(items, action : function(Object)) {
	for (var item in items) action(item);
}

static function toFloat(object : Object) : float{
	var number : float = object;
	return number;
}

static function toInt(object : Object) : int{
	var number : int = object;
	return number;
}
