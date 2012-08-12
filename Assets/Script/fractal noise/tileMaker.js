#pragma strict

var atlas : Atlas;
var toClone : Transform;
var noise : NoisePattern;
var holder : GameObject;

function Start () {

}

function Update () {

	
//	Destroy(holder);
	holder = new GameObject();
	makeSprites();
	
//	var i : int;
//	var j : int;
//	for(i = 0; i < noise.size; i++){
//		for(j = 0; j < noise.size; j++){
////			var cube = Instantiate(toClone);
////			cube.transform.parent = holder.transform;
////			cube.transform.position = Vector2(i,j);
////			var newscale = noise.scale * Vector3(1,1,1) * noise.field[i,j] / (noise.cuts*noise.noise);
////////			var newscale = noise.scale * Vector3(1,1,1) * noise.field[i,j];
////			cube.transform.localScale = newscale;
////			if(cube.transform.localScale.x < 0)
////				cube.transform.localScale *= 0;
//
//			var newScale : Vector3 = noise.scale * Vector3(1,1,1) * noise.field[i,j] / (noise.cuts*noise.noise);
//			var tile : GameObject = new GameObject();
//			var sprite : SpriteAnimation;
//			
//			var tileName : String = tileTypeFor(i, j);
//			
//			
//			sprite = CalmSpritesFactory.newSpriteAnimation(atlas, tileName); 
//			
//			sprite.gameObject.transform.parent = tile.transform;
//			
//			tile.transform.position = Vector2(i,j) * 20;
////			tile.transform.position.z = 2*Time.time;
//			tile.transform.parent = holder.transform;
//			
//			holder.transform.position.z = -Time.time * 10;
//						
//		}
//	}
}

function makeSprites(){
	for(var i = 0; i < noise.size; i++){
		for(var j = 0; j < noise.size; j++){
			makeSpritesFor(i,j);
		}
	}
}

function makeSpritesFor(i : float, j : float){
//	if(isWater(i, j)){
//		makeSprite("water", Vector2(i - 0.5, j - 0.5));
//		makeSprite("water", Vector2(i - 0.5, j + 0.5));
//		makeSprite("water", Vector2(i + 0.5, j - 0.5));
//		makeSprite("water", Vector2(i + 0.5, j + 0.5));
//	}
//	else{
		makeSprite(getSprite(i, j, 4), Vector2(i - 0.25, j - 0.25));
		makeSprite(getSprite(i, j, 3), Vector2(i + 0.25, j - 0.25));
		makeSprite(getSprite(i, j, 2), Vector2(i + 0.25, j + 0.25));
		makeSprite(getSprite(i, j, 1), Vector2(i - 0.25, j + 0.25));
//	}
	
}

function getSprite(i : int, j : int, quadrant : int) : String {
	var spot1 : Vector2;
	var spot2 : Vector2;
	var spot3 : Vector2;
	var spot4 : Vector2;
	
	var thisIsWater = isWater(i, j);
	
	if(quadrant == 4){
		spot4 = Vector2(i-1, j-1);
		spot3 = Vector2(i, j-1);
		spot2 = Vector2(i, j);
		spot1 = Vector2(i-1, j);
	}
	else if(quadrant == 3){
		spot4 = Vector2(i, j-1);
		spot3 = Vector2(i+1, j-1);
		spot2 = Vector2(i+1, j);
		spot1 = Vector2(i, j);
	}
	else if(quadrant == 2){
		spot4 = Vector2(i, j);
		spot3 = Vector2(i+1, j+1);
		spot2 = Vector2(i+1, j+1);
		spot1 = Vector2(i, j+1);
	}
	else{
		spot4 = Vector2(i-1, j);
		spot3 = Vector2(i, j);
		spot2 = Vector2(i, j+1);
		spot1 = Vector2(i-1, j+1);
	}
	if(thisIsWater)
		return "water";
	
	var spriteName = "grass_water_";
	if(isWater(spot1.x, spot1.y))
		spriteName += "0";
	else
		spriteName += "1";
		
	if(isWater(spot2.x, spot2.y))
		spriteName += "0";
	else
		spriteName += "1";
		
	if(isWater(spot3.x, spot3.y))
		spriteName += "0";
	else
		spriteName += "1";
		
	if(isWater(spot4.x, spot4.y))
		spriteName += "0";
	else
		spriteName += "1";
		
		
//	Debug.Log(spriteName)
//	Debug.Log(spriteName + "  .. " + i + " " + j);
	
	if(spriteName == "grass_water_1111")
		return "grass";
		
	if(spriteName == "grass_water_0000")
		return "water";
		
//	Debug.Log(spriteName + "  .. " + i + " " + j);
	return spriteName;
	
}

function makeSprite(name : String, vec : Vector2){
	var obj = new GameObject(""+vec);
	var sprite = CalmSpritesFactory.newSpriteAnimation(atlas, name);
	obj.transform.parent = holder.transform;
	sprite.gameObject.transform.parent = obj.transform;
	obj.transform.position = 20.0*vec;
}

function isWater(i : int, j : int){
	i = Mathf.Clamp(i, 0, noise.size-1);
	j = Mathf.Clamp(j, 0, noise.size-1);
	
	return noise.field[i,j] <= 0;
}
//
//function tileTypeFor(i : int, j : int) : String {
//	
//	var newscale = noise.scale * Vector3(1,1,1) * noise.field[i,j] / (noise.cuts*noise.noise);	
//	if(newscale.x <= 0)
//		return "water";
//	else{
//
//	}
//	return "grass";	
////	sprite =
////	return "";
//}












