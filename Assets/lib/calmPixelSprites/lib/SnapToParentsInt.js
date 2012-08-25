#pragma strict
private var target : Transform;
var ignoreZ = false;

function Update () {
	if(target == null || target != transform.parent){
		target = transform.parent;	
	}
	if(target == null)
		target = transform;
	
//	transform.position = new Vector3(Mathf.RoundToInt(target.position.x) + 0.05f, Mathf.RoundToInt(target.position.y) - 0.05f, target.position.z);


	if(ignoreZ)
		transform.position = new Vector3(Mathf.RoundToInt(target.position.x), Mathf.RoundToInt(target.position.y), transform.position.z);
	else
		transform.position = new Vector3(Mathf.RoundToInt(target.position.x) , Mathf.RoundToInt(target.position.y), target.position.z);


//	if(ignoreZ)
//		transform.position = new Vector3(Mathf.RoundToInt(target.position.x) + 0.05, Mathf.RoundToInt(target.position.y) + 0.05, transform.position.z);
//	else
//		transform.position = new Vector3(Mathf.RoundToInt(target.position.x) + 0.05, Mathf.RoundToInt(target.position.y) + 0.05, target.position.z);
}