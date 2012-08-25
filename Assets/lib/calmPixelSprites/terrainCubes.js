#pragma strict
var noise : NoisePattern;

function Update () {
	redraw();
}

var bucket : Transform;


var drawn = false;
function redraw(){
	if(!drawn){
		drawn = true;
		rerun();
	}
}
var toClone : Transform;
function rerun(){
	if(bucket != null)
		Destroy(bucket.gameObject);
	bucket = new GameObject("bucket").transform;
	noise.doIt();
	for(var i = 0; i < noise.size; i++){
		for(var j = 0; j < noise.size; j++){
			var cube = Instantiate(toClone);
			cube.name = "" + i + " " + j +"/"+noise.size;
			var scaler = noise.field[i,j];
			cube.transform.position = Vector3(i, 0, j);
			cube.transform.localScale.y *= scaler;
			cube.transform.position.y = 0.5 * scaler;
			cube.transform.parent = bucket.transform;
		}
	}
}