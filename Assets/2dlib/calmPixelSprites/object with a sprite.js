#pragma strict

var myAtlas : Atlas;
var myFilter : MeshFilter;
var texture : Texture;
var pixelsWide : int = 10;
function Start () {

    renderer.material = new Material (Shader.Find("Diffuse"));
    renderer.material.mainTexture = myAtlas.renderer.materials[0].mainTexture;//texture;

	GetComponent(MeshRenderer).material = myAtlas.renderer.materials[0];

    myFilter.mesh.RecalculateNormals();

	transform.position = 10*Random.insideUnitCircle;
}

var x1 : int;
var y1 : int;
var x2 : int;
var y2 : int;
function Update () {
	if(myFilter.mesh.vertices.length == 0){
		myFilter.mesh = myAtlas.meshFilter.mesh;
	}


	var mapWidth = myAtlas.renderer.material.mainTexture.width;
	var mapHeight = myAtlas.renderer.material.mainTexture.height;
	var newMesh = QuadGenerator.CreateQuad(x1, y1, x2, y2, mapWidth, mapHeight);


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

class QuadGenerator {

    static function CreateQuad(x1 : float, y1 : float, x2 : float, y2 : float, mapWidth : float, mapHeight : float) : Mesh
    {
        var mesh = new Mesh();

		var vertices = getVerts(x2 - x1, y2 - y1);

		var uv = getUVs(x1, y1, x2, y2, mapWidth, mapHeight);

		var triangles = getTris();


        mesh.vertices = vertices;
        mesh.uv = uv;
        mesh.triangles = triangles;

        return mesh;
    }
    
    static function getVerts(){
            var vertices : Vector3[] = new Vector3[4];

            vertices[0] = new Vector3( 1,  1, 0);
            vertices[1] = new Vector3( 1, -1, 0);
            vertices[2] = new Vector3(-1,  1, 0);
            vertices[3] = new Vector3(-1, -1, 0);
		return vertices;	
    }
    
    static function getVerts(xWidth : int, yWidth : int){
            var vertices : Vector3[] = new Vector3[4];

            vertices[0] = new Vector3(-xWidth/2, -yWidth/2, 0);
            vertices[1] = new Vector3(-xWidth/2,  yWidth/2, 0);
            vertices[2] = new Vector3( xWidth/2, -yWidth/2, 0);
            vertices[3] = new Vector3( xWidth/2,  yWidth/2, 0);
		return vertices;	
    }
    
    static function getUVs(x1 : float, y1 : float, x2 : float, y2 : float, mapWidth : float, mapHeight : float){

		
            var uv : Vector2[] = new Vector2[4];

            uv[0] = (new Vector2(x1/mapWidth, (1-y2/mapHeight)));
            uv[1] = (new Vector2(x1/mapWidth, (1-y1/mapHeight)));
            uv[2] = (new Vector2(x2/mapWidth, (1-y2/mapHeight)));
            uv[3] = (new Vector2(x2/mapWidth, (1-y1/mapHeight)));

            return uv;
    }
	
	static function getTris(){
	        var triangles : int[] = [0,1,2, 2,1,3];
		return triangles;	
	}
}