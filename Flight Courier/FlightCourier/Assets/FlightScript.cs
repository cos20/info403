using UnityEngine;
using System.Collections;

public class FlightScript : MonoBehaviour {
	public float AmbientSpeed = 1000.0f;
	public float RotationSpeed = 50.0f;
	public float LiftForce = 10.0f;
	
	// Use this for initialization
	void Start () {
	}
	
	// Update is called once per frame
	void Update () {
        Quaternion AddRot = Quaternion.identity;
        float roll = 0;
        float pitch = 0;
        float yaw = 0;
        roll = Input.GetAxis("Roll") * (Time.deltaTime * RotationSpeed);
        pitch = Input.GetAxis("Pitch") * (Time.deltaTime * RotationSpeed);
        yaw = Input.GetAxis("Yaw") * (Time.deltaTime * RotationSpeed);
        AddRot.eulerAngles = new Vector3(-pitch, yaw, -roll);
        rigidbody.rotation *= AddRot;
		//rigidbody.AddTorque(AddRot.eulerAngles);
        Vector3 AddPos = Vector3.forward;
        AddPos = rigidbody.rotation * AddPos;
		//if(rigidbody.velocity.magnitude<AmbientSpeed)
		//	rigidbody.AddForce(AddPos * 100);
       // AddPos = Vector3.up;
       // AddPos = rigidbody.rotation * AddPos;
		//rigidbody.AddForce(AddPos * Mathf.Min(rigidbody.velocity.magnitude * LiftForce, 150));
        rigidbody.velocity = AddPos * (Time.deltaTime * AmbientSpeed);
    }
}
