#pragma strict
//
//function Start () {
//
//}
//
//function Update () {
//
//}

public static var singleFrames : Hashtable = new Hashtable();

public static var looseEnds = new GameObject("_single animations from CalmSpritesFactory");

public static function newAnimationStruct(passedName : String) : AnimationStruct {

	if(singleFrames.ContainsKey(passedName)){
		return singleFrames[passedName] as AnimationStruct;
	}
	else{
		
	//	passedName = "" + passedName;
		var newAnimation = new GameObject();
		var animation : AnimationStruct = newAnimation.AddComponent(AnimationStruct);
		newAnimation.name = passedName;
		animation.setName(passedName);
		newAnimation.transform.parent = looseEnds.transform;
		animation.frames = [new Frame(passedName)];
		singleFrames.Add(passedName, animation);
		return animation;
	}
}

public static function newSpriteAnimation(atlas : Atlas, name : String) : SpriteAnimation {
	var spriteAnimation = newSpriteAnimation(atlas);
	spriteAnimation.setSprite(name);
	return spriteAnimation;
}

public static function newSpriteAnimation(atlas : Atlas, animation : AnimationStruct) : SpriteAnimation {
	var spriteAnimation = newSpriteAnimation(atlas);
	spriteAnimation.setSprite(animation);
	return spriteAnimation;

//	var spriteAnimation
////	var stapToParentsInt
////	var MeshFilter
//
//	var SingleSprite
//		atlas

}

private static function newSpriteAnimation(atlas : Atlas) : SpriteAnimation {
	var newSpriteAnimation = new GameObject("factory sprite animation atlas:" + atlas.name);
	var spriteAnimation = newSpriteAnimation.AddComponent(SpriteAnimation);
	newSpriteAnimation.AddComponent(SnapToParentsInt);
	newSpriteAnimation.AddComponent(MeshFilter);
	newSpriteAnimation.AddComponent(MeshRenderer);
	var singleSprite = newSpriteAnimation.AddComponent(SingleSprite);
	
	singleSprite.myAtlas = atlas;
	spriteAnimation.sprite = singleSprite;
	
	return spriteAnimation;
}