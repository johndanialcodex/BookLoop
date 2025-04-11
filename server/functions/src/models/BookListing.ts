import { Schema, model } from "mongoose"

const BookListingSchema = new Schema(
	{
		title: { type: String, required: true },
		author: { type: String, required: true },
        genre: { type: String, required: true },
        description: { type: String, required: true },
		user: { type: Schema.Types.ObjectId, ref: "User", required: true }
	},
	{ timestamps: true }
)

const BookListing = model("BookListing", BookListingSchema)

export default BookListing