import { Schema, model } from "mongoose"

const UserSchema = new Schema(
	{
		username: { type: String, required: true },
		city: { type: String, required: true }
	},
	{ timestamps: true }
)

const User = model("User", UserSchema)

export default User

/*

		firebaseUid: { type: String, required: true },

MODELS LOOK LIKE THIS IN POSTMAN FOR TESTING:
{
"firebaseUid": "randomUID_12345678901234567890123456789012", // Link to Firebase Auth user
"username": "String",
"city": "String" // City name from Google Maps API
}
USERS SELECT THEIR CITY USING GOOGLE PLACES AUTOCOMPLETE
CITY NAME POSSIBLY STORED IN FIREBASE?
*/