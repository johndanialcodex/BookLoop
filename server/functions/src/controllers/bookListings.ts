import BookListing from "../models/BookListing"
import HTTPHandler from "../interfaces/HTTPHandler"

// CREATE

export const postBookListing: HTTPHandler = async (
	req,
	res
) => {
	try {
		const bookListing = new BookListing(req.body)
		await bookListing.save()
		res.status(201).send(bookListing)
	} catch (e: any) {
		res.status(403).send("Invalid Request")
	}
}

// READ ALL

export const getBookListings: HTTPHandler = async (
	req,
	res
) => {
	try {
		const bookListings = await BookListing.find()
		res.status(200).send(bookListings)
	} catch (e: any) {
		res.status(500).send("Internal Server Error")
	}
}

// READ ONE

export const getBookListing: HTTPHandler = async (
	req,
	res
) => {
	try {
		const bookListing = await BookListing.findById(
			req.params.id
		)
		res.status(200).send(bookListing)
	} catch (e: any) {
		res.status(404).send("Book Listing not found")
	}
}

// UPDATE

export const putBookListing: HTTPHandler = async (
	req,
	res
) => {
	try {
		const bookListing = await BookListing.findByIdAndUpdate(
			req.params.id,
			req.body,
			{ new: true }
		)
		if (!bookListing) throw new Error()
		await bookListing.save()
		res.status(200).send(bookListing)
	} catch (e: any) {
		res.status(404).send("Book Listing not found")
	}
}

// DESTROY

export const deleteBookListing: HTTPHandler = async (
	req,
	res
) => {
	try {
		await BookListing.findByIdAndDelete(req.params.id)
		res.status(204).send()
	} catch (e: any) {
		res.status(404).send("Book Listing not found")
	}
}
