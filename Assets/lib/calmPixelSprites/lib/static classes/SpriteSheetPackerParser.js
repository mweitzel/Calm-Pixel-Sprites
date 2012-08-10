#pragma strict

class SpriteSheetParser {

	static function Parse(fileName : String) : Hashtable{
		
		var spriteTable = new Hashtable();
		var textdata : TextAsset = Resources.Load(fileName);
		var block : String = textdata.text;

		var index = 0;
		while(index < block.length){
			var keyValueIndex : Hashtable = keyValuePair(index, block);
			spriteTable.Add(keyValueIndex["key"], keyValueIndex["value"]);
			index = keyValueIndex["nextIndex"];
		}

		return spriteTable;
	}
	
	private static function keyValuePair(index : int, block : String) : Hashtable{

		var sentence : String[] = ["", "", "", "", "", ""];
		var token = 0;

		while(index < block.length && block[index] != '\n'){
			var spot = block[index];

			if(spot == ' '){
				token++;
			}
			else{
				sentence[token] = sentence[token] + spot;
			}
			index++;
		}
		
		var returnHash = new Hashtable();
		returnHash.Add("nextIndex", index + 1);
		returnHash.Add("key", sentence[0]);
		returnHash.Add("value", Vector4(int.Parse(sentence[2]),
										int.Parse(sentence[3]),
										int.Parse(sentence[4]),
										int.Parse(sentence[5])
										)
						);
		return returnHash;
	}
}