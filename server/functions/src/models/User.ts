import { Schema, model } from "mongoose"

const UserSchema = new Schema(
	{
		firebaseUid: { type: String, required: true },
		username: { type: String, required: true },
		city: { type: String, required: true }
	},
	{ timestamps: true }
)

const User = model("User", UserSchema)

export default User

/*
MODELS LOOK LIKE THIS IN POSTMAN FOR TESTING:
{
"firebaseUid": "String", // Link to Firebase Auth user
"username": "String",
"city": "String" // City name from Google Maps API
}
USERS SELECT THEIR CITY USING GOOGLE PLACES AUTOCOMPLETE
CITY NAME POSSIBLY STORED IN FIREBASE?
*/