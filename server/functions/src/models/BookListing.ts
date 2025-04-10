import { Schema, model } from "mongoose"

const BookListingSchema = new Schema(
	{
		title: { type: String, required: true },
		author: { type: String, required: true },
        genre: { type: String, required: true },
        description: { type: String, required: true },
        city: { type: String, required: true },
	},
	{ timestamps: true }
)

const BookListing = model("BookListing", BookListingSchema)

export default BookListing

/*

		firebaseUid: { type: String, required: true },  // Store the Firebase UID

MODELS LOOK LIKE THIS FOR POSTMAN TESTING:
{
"userId": "String", // Firebase UID
"title": "String",
"author": "String",
"genre": "String",
"description": "String",
"city": "String" // City name from Google Maps API,
}
USERS MUST SELECT A CITY FOR THEIR LISTING EVEN IF ALREADY CREATED IN THEIR PROFILE...
...BECAUSE WE WANT THIS LISTING TO BE FILTERED IN OTHER USER'S SEARCHES
LISTINGS ARE FILTERED BY CITY NAME

 

ADD LATER:

"image": "String", // (Optional, stored in Firebase Storage)
*/