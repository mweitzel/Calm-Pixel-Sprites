#pragma strict
//
//function Start () {
//
//}
//
//function Update () {
//
//}
public static var looseEnds = new GameObject("_single animations from CalmSpritesFactory");

public static function newAnimation(passedName : String) : AnimationStruct{
//	passedName = "" + passedName;
	var newAnimation = new GameObject();
	var animation : AnimationStruct = newAnimation.AddComponent(AnimationStruct);
	newAnimation.name = passedName;
	animation.setName(passedName);
	newAnimation.transform.parent = looseEnds.transform;
	animation.frames = [new Frame(passedName)];
	return animation;
}