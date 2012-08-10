#pragma strict

var nameOfAtlas : String;
var meshFilter : MeshFilter;

private var spriteTable = new Hashtable();

function Start () {
	meshFilter = GetComponent(MeshFilter);
	spriteTable = SpriteSheetParser.Parse(nameOfAtlas);
}

function getSprite(key : String) : Vector4 {
	if(spriteTable.ContainsKey(key)){
		return spriteTable[key];
	}
	else
		return Vector4.zero;
}