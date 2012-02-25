#pragma strict

var text : String;

function OnGUI () {
	
    // Make a notification box.
	var boxX = Screen.width * 0.35;
	var boxY = Screen.height * 0.4;
	var boxWidth = Screen.width * 0.3;
	var boxHeight = Screen.height * 0.2;
	
	GUI.Box (Rect (boxX, boxY, boxWidth, boxHeight), text);
	
	// Hit space key to dismiss this Notification Box.
	if (Event.current.type == EventType.KeyUp && Event.current.keyCode == KeyCode.Space) {
		Destroy(this);
	}
}
