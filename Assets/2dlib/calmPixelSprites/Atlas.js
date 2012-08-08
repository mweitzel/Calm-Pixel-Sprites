#pragma strict

var nameOfAtlasKey : String;
var thing : String;
var meshFilter : MeshFilter;

function Start () {
	meshFilter = GetComponent(MeshFilter);
	var textdata : TextAsset = Resources.Load(nameOfAtlasKey);
//	Debug.Log(textdata);
	thing = textdata.text;
	
//	
//	meshFilter.mesh = QuadGenerator.CreateQuad();
//	meshFilter = GetComponent(MeshFilter);
	
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