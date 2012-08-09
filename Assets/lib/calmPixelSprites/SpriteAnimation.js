#pragma strict

var animationStruct : AnimationStruct;
var sprite : singleSprite;
var defaultFrame : String = "default";

function Start () {
	play();
}

function Update () {
	play();
}

private function play(){
	if(animationStruct == null)
		sprite.setSprite(defaultFrame);
	else
		playAnimation();
	
	
}

 var startTime = 0.0;

private function playAnimation(){
	sprite.setSprite(animationStruct.frameAt(Time.time-startTime));
}