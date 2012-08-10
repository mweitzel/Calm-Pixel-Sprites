#pragma strict

class AnimationStruct extends MonoBehaviour{

//var name : String = "nameless";
//name : String = "nameless";
var fps : float = 8.0;
var loop : boolean = false;
var frames : Frame[];



static function frameAt(animationStruct : AnimationStruct, timeT : float) : String {
	return AnimationStruct.frameAt(animationStruct, timeT, animationStruct.loop);
}

static function frameAt(animationStruct : AnimationStruct, timeT : float, loop : boolean) : String{

	var index = animationStruct.frames.length;
	
	if(animationStruct.fps < 0.5){
		animationStruct.fps = 0.5;
	}
	
	var totalTime = 0.0;
	while(totalTime < timeT || (!loop && index < animationStruct.frames.length)){
		totalTime += animationStruct.frames[index%animationStruct.frames.length].duration / animationStruct.fps;
		index++;
	}
	index--;
	
	if(animationStruct.frames.length == 0)
		return nullSprite();
	else{
		return animationStruct.frames[index%animationStruct.frames.length].name;
	}
}

static function nullSprite() : String {
	return "";
}

function setName(name : String){
	super.name = name;
}

function totalFrames() : int {
	return frames.length;
}

function totalTime() : float {
	var total = 0.0;
	for(var frame : Frame in frames){
		total += frame.duration;
	}
	return total;	
}

}

class Frame {
	function Frame(spriteName : String) {
		name = spriteName;
	}
	
	var name : String = "";
	var duration = 1.0;
}
