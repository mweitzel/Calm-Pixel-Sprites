#pragma strict
var target : Transform;

function Update () {
	if(target == null)
		target = transform;
	
//	transform.position = new Vector3(Mathf.RoundToInt(target.position.x) + 0.05f, Mathf.RoundToInt(target.position.y) - 0.05f, target.position.z);
	transform.position = new Vector3(Mathf.RoundToInt(target.position.x), Mathf.RoundToInt(target.position.y), target.position.z);
}