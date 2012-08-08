#pragma strict

var myAtlas : Atlas;
var myFilter : MeshFilter;
var texture : Texture;

function Start () {

    renderer.material = new Material (Shader.Find("Diffuse"));
    renderer.material.mainTexture = myAtlas.renderer.materials[0].mainTexture;//texture;

	GetComponent(MeshRenderer).material = myAtlas.renderer.materials[0];

    myFilter.mesh.RecalculateNormals();

	transform.position = 10*Random.insideUnitCircle;
}

var x_y_width_height : Vector4;

function Update () {
	if(myFilter.mesh.vertices.length == 0){
		myFilter.mesh = myAtlas.meshFilter.mesh;
	}

	x_y_width_height.x = Mathf.RoundToInt(x_y_width_height.x);
	x_y_width_height.y = Mathf.RoundToInt(x_y_width_height.y);
	x_y_width_height.z = Mathf.RoundToInt(x_y_width_height.z);
	x_y_width_height.w = Mathf.RoundToInt(x_y_width_height.w);


	var mapWidth = myAtlas.renderer.material.mainTexture.width;
	var mapHeight = myAtlas.renderer.material.mainTexture.height;
//	var newMesh = QuadGenerator.CreateQuad(x1, y1, x2, y2, mapWidth, mapHeight);
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

class QuadGenerator {

    static function CreateQuad(x_y_width_height : Vector4, mapWidth : float, mapHeight : float) : Mesh
    {	
    	
    	var x1 : float = x_y_width_height.x;
    	var y1 : float = x_y_width_height.y;
    	var x2 : float = x_y_width_height.x + x_y_width_height.w;
    	var y2 : float = x_y_width_height.y + x_y_width_height.z;

//    	if((x1+x2)%2==1)
//    		x2 += 1;
//    	if((y1+y2)%2==1)
//    		y2 += 1;
        var mesh = new Mesh();

		var vertices = getVerts(x2 - x1, y2 - y1);
    	
    	var xOffSet = 0.0;
		var yOffSet = 0.0;
		if((x1+x2)%2!=0)
    		xOffSet = 1;
    	if((y1+y2)%2!=0)
    		yOffSet = -1;
    	if(xOffSet != 0 || yOffSet != 0){
//    		for(var i = 0; i < vertices.length; i++){
//    			vertices[0].x += xOffSet;
    			vertices[0].y += yOffSet;
    			vertices[2].y += yOffSet;
    			vertices[2].x += xOffSet;
    			vertices[3].x += xOffSet;
//    		}
    	}

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

            vertices[0] = new Vector3(Mathf.RoundToInt(-xWidth/2), Mathf.RoundToInt(-yWidth/2), 0);
            vertices[1] = new Vector3(Mathf.RoundToInt(-xWidth/2), Mathf.RoundToInt( yWidth/2), 0);
            vertices[2] = new Vector3(Mathf.RoundToInt( xWidth/2), Mathf.RoundToInt(-yWidth/2), 0);
            vertices[3] = new Vector3(Mathf.RoundToInt( xWidth/2), Mathf.RoundToInt( yWidth/2), 0);
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