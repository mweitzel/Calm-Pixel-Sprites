#pragma strict

var plane : MeshFilter;

var toClone : Transform;
var bucket : GameObject;

function Start () {
	bucket = new GameObject("bucket");
	_.forEach(_.doubleArray(10,10), cloneHere);
//	_.forEach(_.singleArray(plane.mesh.vertices.length, updateVertice);
	updateVertices();
}

function updateVertices(){//xy : Vector2){
	var verts = plane.mesh.vertices;
	for(var i = 0; i < verts.length; i++){
		 verts[i] += Vector3(0,Mathf.Sin(Vector3.Distance(verts[i], toClone.position))*0.01*Mathf.Sin(Time.time),0);
//		 verts[i] += Vector3(0,(Random.value-0.5)*0.01,0);
	}
	plane.mesh.vertices = verts;
	plane.mesh.RecalculateNormals();
	plane.mesh.RecalculateBounds();
//	plane.mesh.vertices[xy.x + xy.y*xy.x].y = Random.value + 1;
}

function cloneHere(xy : Vector2) {
	var newThing = Instantiate(toClone).gameObject;
	newThing.transform.parent = bucket.transform;
	newThing.transform.position = xy;	
}

function Update () {
	updateVertices();
}