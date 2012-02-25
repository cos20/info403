
var mainCharacter : GameObject;
var NPCName : String;
var minDistance = 5;
var maxDistance = 10;
var conversationCount = 0;
var conversationArray = ["Hi, my name is Derp.", "Nice to meet you.", "Here is your first mission.", "Please deliver this package to my friend Derpina."];
var showDialogue = false;
var hasMission = true;

function GiveMission(text) {
	// Display text using NotificationBox, then
	// Assign the Mission.js to the mainCharacter
	// Change conversationArray and other vars.
	
	this.mainCharacter.AddComponent("NotificationBox");
	var nb = mainCharacter.GetComponent("NotificationBox");
	nb.text = text;
	
	mainCharacter.AddComponent("Mission");
	
	this.conversationArray = ["Please come back with the package."];
	this.conversationCount = 0;
	this.hasMission = false;
}

function Update () {
	// If the player pressed SPACE key, and player's character is within [minDistance, maxDistance] 
	// from this NPC, pop up the conversation.
	
	if (Input.GetKeyUp(KeyCode.Space) && showDialogue == false && 
		mainCharacter.GetComponent("NotificationBox") == null) {
		
		var distance = Vector3.Distance(mainCharacter.transform.position, transform.position);
		if (distance >= minDistance && distance <= maxDistance) {
			if (conversationCount != 0) {
				conversationCount = 0;
			} else {
				showDialogue = true;
			}
		}
	}
}

function OnGUI () {

	if (showDialogue == false) {
		return;
	}
	
    // Make a conversation box.
	var boxX = 5 + Screen.width * 0.05;
	var boxY = Screen.height * 0.75;
	var boxWidth = Screen.width * 0.9 - 10;
	var boxHeight = Screen.height * 0.2;
	
	var NPCConversation : String;
	NPCConversation = conversationArray[conversationCount];
	GUI.Box (Rect (boxX, boxY, boxWidth, boxHeight), NPCName + ": " + NPCConversation);
	
	// Hit space key to see NPC's next sentence.
	if (Event.current.type == EventType.KeyUp && Event.current.keyCode == KeyCode.Space) {
		
		// Show next dialogue.
		conversationCount++;
		
		if (conversationCount >= conversationArray.length) {
			// Conversation is finished.
			showDialogue = false;
			
			// Give out mission if this NPC has any.
			if (this.hasMission) {
				GiveMission("Mission Received!");
			}
		}
	}
}
