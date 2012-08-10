#pragma strict

	
//class SpriteAnimation extends MonoBehaviour {
//	private var calmSpritesHolder : CalmSpritesHolder;
	var animationStruct : AnimationStruct;
	var sprite : SingleSprite;
	var defaultFrame : String = "default";
	var playSpeed = 1.0;
	var playOnAwake = true;

	private var lastPause : float = 0.0;
	private var lastPlay : float = 0.0;
	private var playOffset : float = 0.0;
	private var shouldDisplay : boolean = true;
	private var shouldForceLoop : boolean = false;

	public function Start(){
		attach();
	}
	
	private function attach(){
		
	}
	
	public function Awake(){
		if(animationStruct == null || animationStruct.frames.length == 0){
			animationStruct = animationFromDefault();
		}
		
		if(playOnAwake)
			play();
	}
	
	public function Update(){
		if(!shouldDisplay){
			sprite.setSprite(AnimationStruct.nullSprite());
		}
		else if (shouldForceLoop){
			sprite.setSprite(AnimationStruct.frameAt(animationStruct, playSpeed * timeOfInterest(), true));
		}
		else{
			sprite.setSprite(AnimationStruct.frameAt(animationStruct, playSpeed * timeOfInterest()));
		}
	}

	public function play(timeOffset : float){
		playOffset = timeOffset;
		play();
	}

	public function play(){
		lastPlay = Time.time;
	}	
	
	public function pause(){
		lastPause = Time.time;
		playOffset += lastPause;
	}
	
	public function setSprite(animationStruct : AnimationStruct){
		this.animationStruct = animationStruct;
	}
	
	public function setSprite(spriteName : String){
		defaultFrame = spriteName;
		this.animationStruct = animationFromDefault();
	}

	public function forceLoop(doIt : boolean){
		shouldForceLoop = doIt;
	}

	public function show(){
		shouldDisplay = true;
	}
	
	public function hide(){
		shouldDisplay = false;
	}

	private function animationFromDefault() : AnimationStruct {
		var newAnimationStruct = CalmSpritesFactory.newAnimation(defaultFrame);//ScriptableObject.CreateInstance(AnimationStruct) as AnimationStruct;
//		var newFrame = new Frame(defaultFrame);
//		newAnimationStruct.frames = [newFrame];
		return newAnimationStruct;
	}
	
	private function timeOfInterest() : float{
		if(lastPause > lastPlay){
			return playOffset;
		}
		else{
			return playOffset + Time.time - lastPlay;
		}
	}	
//}