#pragma strict

//var toClone : Transform;

var size : int = 16;
var cuts : int = 4;
var field : float[,];// = float[size, size];
var seedValue = 2345124;
var thing : Vector3[];
var scale : float;
//var squarish = false;
//var holder : GameObject;

var lastSeedValueUsed : int;

var noise : int = 5;

function Update () {
	makeNewMap();
}

function makeNewMap(){
//		Destroy(holder);
//	holder = new GameObject();
//	
	field = new float[size,size];

	
	for(var i = 0; i < size; i++){
		for(var j = 0; j < size; j++){
			field[i,j] = 0.0;
		}
	}
	
	var actualSeed = Random.value * 10000000;
	if(seedValue != 0)	
		actualSeed = seedValue;
//	else
//		actualSeed = 	
	
	Random.seed = actualSeed;
	lastSeedValueUsed = actualSeed;
	
	var values = new Array();
	thing = null;
	
	for(var c = 0; c < cuts; c++){
		Random.seed = Random.value * 100000;
		var spots = Random.value * noise * (size/(c+1));// size / (c*c);
		for(var n = 0; n < spots; n++){
			Random.seed = Random.value * 100000;
			var a = Random.value * size;
			Random.seed = Random.value * 100000;
			var b = Random.value * size;
			values.Add(Vector3(a, b, (Random.value-0.5)*2.0 *(c+1.0)*(c+1.0)));
//			Random.seed = Random.value;)
		}
	}

	for(var value : Vector3 in values){
		var pointA = Vector2(value.x,value.y);
		for(i = 0; i < size; i++){
			for(j = 0; j < size; j++){
				var pointB = Vector2(i, j);
//				field[i,j] += 1/(Vector2.Distance(pointA, pointB));
				field[i,j] += intify(value.z/(Vector2.Distance(pointA, pointB)));
			}
		}
	}

//	
//	for(i = 0; i < size; i++){
//		for(j = 0; j < size; j++){
//			var cube = Instantiate(toClone);
//			cube.transform.parent = holder.transform;
//			cube.transform.position = Vector2(i,j);
//			cube.transform.localScale = scale * Vector3(1,1,1) * field[i,j] / (cuts*noise);
//			if(cube.transform.localScale.x < 0)
//				cube.transform.localScale *= 0;
//		}
//	}
	
	thing = values.ToBuiltin(Vector3);

}

function intify(number : float) : int {
	return number;
}