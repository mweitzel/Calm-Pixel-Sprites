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
var mock = true;
function Start () {
}


function doIt(){
	if(mock){
		size = 3;
		field = new float[3,3];
		field[0,0] = -2; field[0,1] = -2; field[0,2] = -2;
		field[1,0] = -2; field[1,1] = 2; field[1,2] = -2;
		field[2,0] = -2; field[2,1] = -2; field[2,2] = -2;
//		field[0,0] = 2; field[0,1] = 2; field[0,2] = 0;
//		field[1,0] = 2; field[1,1] = 0; field[1,2] = -2;
//		field[2,0] = 0; field[2,1] = -2; field[2,2] = -2;
//		field[1,1] = -2;
//		field[2,0] = -2;
//		field[2,1] = -2;
	}
	else
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
	return number;//Mathf.Clamp(number, -2, 2);
}







//
//
//
//
//
//#pragma strict
//
////var toClone : Transform;
//
//var size : int = 16;
//var cuts : int = 4;
//var field : float[,];// = float[size, size];
//var seedValue = 2345124;
//var thing : Vector3[];
//var scale : float;
////var squarish = false;
////var holder : GameObject;
//
//var lastSeedValueUsed : int;
//
//var noise : int = 5;
//var mock = true;
//function Start () {
//}
//
//
//function doIt(){
//	if(mock){
//		size = 3;
//		field = new float[3,3];
//		field[0,0] = -2; field[0,1] = -2; field[0,2] = -2;
//		field[1,0] = -2; field[1,1] = 2; field[1,2] = -2;
//		field[2,0] = -2; field[2,1] = -2; field[2,2] = -2;
////		field[0,0] = 2; field[0,1] = 2; field[0,2] = 0;
////		field[1,0] = 2; field[1,1] = 0; field[1,2] = -2;
////		field[2,0] = 0; field[2,1] = -2; field[2,2] = -2;
////		field[1,1] = -2;
////		field[2,0] = -2;
////		field[2,1] = -2;
//	}
//	else
//		makeNewMap();
//
//}
//
//function makeNewMap(){
//
//
//
////		Destroy(holder);
////	holder = new GameObject();
////	
//	field = new float[size,size];
//
//	
//	for(var i = 0; i < size; i++){
//		for(var j = 0; j < size; j++){
//			field[i,j] = 0.0;
//		}
//	}
//	
//	var actualSeed = Random.value * 10000000;
//	if(seedValue != 0)	
//		actualSeed = seedValue;
////	else
////		actualSeed = 	
//	
//	Random.seed = actualSeed;
//	lastSeedValueUsed = actualSeed;
//	
//	var values = new Array();
//	thing = null;
//	
//	for(var c = 0; c < cuts; c++){
//		Random.seed = Random.value * 100000;
//		var spots = Random.value * noise * (size/(c+1));// size / (c*c);
//		for(var n = 0; n < spots; n++){
//			Random.seed = Random.value * 100000;
//			var a = Random.value * size;
//			Random.seed = Random.value * 100000;
//			var b = Random.value * size;
//			values.Add(Vector4(a, b, Random.value - 1.0, c));
////			Random.seed = Random.value;)
//		}
//	}
//	
//	for(c = 0; c < cuts; c++){
//
//		for(i = 0; i < size; i++){
//			for(j = 0; j < size; j++){
//				
//				var total = 0.0;
//				var pointB = Vector2(i, j);
//				for(var value : Vector4 in values){
//					var pointA = Vector2(value.x,value.y);
//
////					if(Vector2.Distance(Vector2(pointA.x, 0), Vector2(pointB.x, 0)) < cuts - c && value.w == c &&
////						Vector2.Distance(Vector2(pointA.y, 0), Vector2(pointB.y, 0)) < cuts - c && value.w == c){
////							
////						total += value.z;
////						
////					}
//
//					if(Vector2.Distance(pointA, pointB) < cuts - c && value.w == c)
//						total += value.z;
//				}
//				
//				field[i,j] += Mathf.RoundToInt(Mathf.Clamp(total, -1, 1));
////				field[i,j] += 1/(Vector2.Distance(pointA, pointB));
////				field[i,j] += Mathf.RoundToInt(total);
////				Debug.Log(i + " " + j + " " +field[i,j]);
//			}
//		}
//	}
//
////	}
//	
////	
////	for(i = 0; i < size; i++){
////		for(j = 0; j < size; j++){
////			var cube = Instantiate(toClone);
////			cube.transform.parent = holder.transform;
////			cube.transform.position = Vector2(i,j);
////			cube.transform.localScale = scale * Vector3(1,1,1) * field[i,j] / (cuts*noise);
////			if(cube.transform.localScale.x < 0)
////				cube.transform.localScale *= 0;
////		}
////	}
//	
////	thing = values.ToBuiltin(Vector4);
//
//}
//
//function intify(number : float) : int {
//	return number;//Mathf.Clamp(number, -2, 2);
//}