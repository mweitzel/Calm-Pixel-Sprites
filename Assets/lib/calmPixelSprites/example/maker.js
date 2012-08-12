#pragma strict

var atlas : Atlas;

function Start () {
	for(var i = 0; i < 10; i++){
		for(var j = 0; j < 10; j++){
			var floorTile = CalmSpritesFactory.newSpriteAnimation(atlas, "water");
			floorTile.gameObject.transform.position = Vector2(i * 20, j * 20);
		}
	}
}

function Update () {

}