#pragma strict

var nameOfAtlasKey : String;
var block : String;
var meshFilter : MeshFilter;

	var keys = new Array();//: String[];// = [];
	var values = new Array();//: Vector4[];

function Start () {
	meshFilter = GetComponent(MeshFilter);
	var textdata : TextAsset = Resources.Load(nameOfAtlasKey);
//	Debug.Log(textdata);
//	var keys : String[];// = [];
//	var value : Vector4[];
	
	block = textdata.text;
	var sentence : String[] = ["", "", "", "", "", ""];
	var name = "";
	var index = 0;
	var token = 0;
	while(index < block.length){
		var spot = block[index];

		
		if(spot == ' '){
			token++;
		}
		else if(spot == '\n'){
			addThing(sentence);
			token = 0;
			for(var i = 0; i< sentence.length; i++){
				sentence[i] = "";
			}
		}
		else{
			sentence[token] = sentence[token] + spot;
		}
		
		index++;
	}
	
	Debug.Log(keys);
	Debug.Log(values);


//	
//	meshFilter.mesh = QuadGenerator.CreateQuad();
//	meshFilter = GetComponent(MeshFilter);
	
}

function addThing(sentence : String[]){
	for(var i = 0; i< sentence.length; i++){
		Debug.Log(sentence[i]);
	}
	keys.Push(sentence[0]);
	values.Push(Vector4(int.Parse(sentence[2]),
						int.Parse(sentence[3]),
						int.Parse(sentence[4]),
						int.Parse(sentence[5])
						)
				);
}

//function Update () {
//
//}

function getOffsetFor(frame : String) : Vector2{
	return new Vector2(23,43);
}

//
//
//
//var offset : Vector2;
//function updateSprite () {
//	var uIndex = (startFrame + currentFrame) % uvAnimationTileX;
//	var vIndex = (startFrame + currentFrame) / uvAnimationTileX;
//
//	offset = Vector2(uIndex * tileSize.x, 1.0 - tileSize.y - vIndex * tileSize.y);
//
////	mat = renderer.material;
//	renderer.material.SetTextureOffset ("_MainTex", offset);
//	renderer.material.SetTextureScale ("_MainTex", tileSize);	
//}
//
//function use(subsprite : SpriteDescription) {
//	fps = subsprite.fps;
//	startFrame = subsprite.startFrame;
//	numberOfFrames = subsprite.numberOfFrames;
//	currentFrame = subsprite.index;
//
//	resetTime = Time.time;
//	updateSprite();
//}