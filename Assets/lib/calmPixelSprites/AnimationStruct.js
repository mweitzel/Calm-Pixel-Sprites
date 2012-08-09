#pragma strict

var name : String = "nameless";
var fps : float = 5.0;
var loop = false;
var frames : Frame[];
var atlas : Atlas;

class Frame{
	var name : String = "";
	var duration = 1.0;
}

function frameAt(timeElapsed : float) : String{		
	var index = frames.length;
	
	var totalTime = 0.0;
	while(totalTime < timeElapsed || (!loop && index < frames.length)){
		totalTime += frames[index%frames.length].duration * fps;
		index++;
	}
	index--;
	
	if(frames.length == 0)
		return "";
	else{
//		Debug.Log(frames.length + " .. " + index);
//		Debug.Log(frames);
//		Debug.Log(index%frames.length);
		return frames[index%frames.length].name;
	}
}