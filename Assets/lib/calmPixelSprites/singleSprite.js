#pragma strict

var myAtlas : Atlas;
var myFilter : MeshFilter;
private var currentSprite : String = "";

function Start () {

    renderer.material = new Material (Shader.Find("Diffuse"));
    renderer.material.mainTexture = myAtlas.renderer.materials[0].mainTexture;//texture;

	GetComponent(MeshRenderer).material = myAtlas.renderer.materials[0];

//    myFilter.mesh.RecalculateNormals();

//	transform.position = 10*Random.insideUnitCircle;

	updateSprite();
}

//var x_y_width_height : Vector4;

function Update () {
	if(myFilter.mesh.vertices.length == 0){
		myFilter.mesh = myAtlas.meshFilter.mesh;
		updateSprite();
	}
}

function setSprite(newSprite : String){
	if(currentSprite != newSprite){
		currentSprite = ""+newSprite;
		updateSprite();
	}
}

private function updateSprite(){
	var x_y_width_height = myAtlas.getSprite(currentSprite);
	x_y_width_height.x = Mathf.RoundToInt(x_y_width_height.x);
	x_y_width_height.y = Mathf.RoundToInt(x_y_width_height.y);
	x_y_width_height.z = Mathf.RoundToInt(x_y_width_height.z);
	x_y_width_height.w = Mathf.RoundToInt(x_y_width_height.w);


	var mapWidth = myAtlas.renderer.material.mainTexture.width;
	var mapHeight = myAtlas.renderer.material.mainTexture.height;
	var newMesh = QuadGenerator.CreateQuad(x_y_width_height, mapWidth, mapHeight);


	var mesh = myFilter.mesh;
	mesh.vertices = newMesh.vertices;
	mesh.uv = newMesh.uv;
	mesh.triangles = newMesh.triangles;
	myFilter.mesh.vertices = mesh.vertices;
	myFilter.mesh.uv = mesh.uv;
	myFilter.mesh.triangles = mesh.triangles;

	//how important is this?
    myFilter.mesh.RecalculateNormals();
	
}