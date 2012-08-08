#pragma strict

var name : String = "nameless";
var fps : float = 5.0;
var loop = false;
var frames : Frame[];
var atlas : Atlas;

class Frame{
	var name : String = "";
	var duration = 1;
}