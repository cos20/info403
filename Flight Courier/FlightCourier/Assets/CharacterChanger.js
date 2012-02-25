#pragma strict
var distanceForChange= 30;

//private FlightScript scriptName ="FlightScript";

function Start () {

}

function Update () {
   // String characterName = "3rd Person Controller";
   // String planeName = "Plane";
   
   if(Input.GetKey(KeyCode.E)){
    	var gamePlayer : GameObject = GameObject.Find("3rd Person Controller");
    	var plane : GameObject = GameObject.Find("Plane");
		    	
   	    var distance = Vector3.Distance(gamePlayer.transform.position, plane.transform.position);
   
   		if(distance > distanceForChange){
	   		gamePlayer.SetActiveRecursively(false);
	   		plane.SetActiveRecursively(true);
	   		plane.AddComponent("FlightScript");
//	   	    var script=	plane.GetComponent<FlightScript>();
//	   	    Debug.Log(script.GetType);
	   	
   		}
   }
    
}