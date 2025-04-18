import BookListing from "../models/BookListing"
import HTTPHandler from "../interfaces/HTTPHandler"
import User from "../models/User"

// CREATE


export const postBookListing: HTTPHandler = async (req, res) => {
	console.log(req.body) // Log the incoming request body
	try {
	  const { title, author, genre, description, userId } = req.body
  
	  const user = await User.findById(userId)
	  if (!user) {
		return res.status(404).json({ message: "User not found" })
	  }
  
	  const bookListing = new BookListing({
		title,
		author,
		genre,
		description,
		user: user._id
	  })
	  console.log(bookListing) // Log the created bookListing object
	  await bookListing.save()
	  return res.status(201).json(bookListing)
	} catch (e: any) {
	  console.error(e) // Log the error for more details
	  return res.status(500).json({ message: "Internal server error", error: e.message })
	}
  }

  
/* export const postBookListing: HTTPHandler = async (req, res) => {
	try {
	  const { title, author, genre, description, city } = req.body
	  const firebaseUid = req.body.firebaseUid // Firebase UID from the middleware
  
	  const bookListing = new BookListing({ firebaseUid, title, author, genre, description, city })
	  await bookListing.save()
	  res.status(201).send(bookListing)
	} catch (e: any) {
	  res.status(403).send("Invalid Request")
	}
  }
*/

// READ ALL


export const getBookListings: HTTPHandler = async (req, res) => {
	try {
	  const userId = req.query.user
	  const bookListings = await BookListing.find({ user: userId })
	  res.status(200).send(bookListings)
	} catch (e: any) {
	  res.status(500).send("Internal Server Error")
	}
}

/*

export const getBookListings: HTTPHandler = async (req, res) => {
	try {
	  const bookListings = await BookListing.find();
	  res.status(200).send(bookListings)
	} catch (e: any) {
	  res.status(500).send("Internal Server Error")
	}
  }

export const getBookListings: HTTPHandler = async (req, res) => {
	try {
	  const firebaseUid = req.body.firebaseUid // Firebase UID from the middleware
	  const bookListings = await BookListing.find({ firebaseUid })
	  res.status(200).send(bookListings)
	} catch (e: any) {
	  res.status(500).send("Internal Server Error")
	}
  }

*/

// READ ONE

export const getBookListing: HTTPHandler = async (req, res) => {
	try {
	  const bookListing = await BookListing.findById(req.params.id)
  
	  if (!bookListing) {
		return res.status(404).send("Book Listing not found")
	  }
  
	  return res.status(200).send(bookListing)
	} catch (e: any) {
	  return res.status(500).send("Internal Server Error")
	}
  }

/*

export const getBookListing: HTTPHandler = async (req, res) => {
	try {
	  const bookListing = await BookListing.findById(req.params.id)
  
	  if (!bookListing) {
		return res.status(404).send("Book Listing not found")
	  }
  
	  if (bookListing.firebaseUid !== req.body.firebaseUid) {
		return res.status(403).send("Unauthorized to view this listing")
	  }
  
	  return res.status(200).send(bookListing)
	} catch (e: any) {
	  return res.status(500).send("Internal Server Error")
	}
  }

*/

// UPDATE

export const putBookListing: HTTPHandler = async (req, res) => {
	try {
	  const bookListing = await BookListing.findById(req.params.id)
  
	  if (!bookListing) {
		return res.status(404).send("Book Listing not found")
	  }
  
	  Object.assign(bookListing, req.body)
	  await bookListing.save()
  
	  return res.status(200).send(bookListing)
	} catch (e: any) {
	  return res.status(500).send("Internal Server Error")
	}
  }


// DESTROY

export const deleteBookListing: HTTPHandler = async (req, res) => {
  try {
    const bookListing = await BookListing.findById(req.params.id)

    if (!bookListing) {
      console.error(`Book listing with ID ${req.params.id} not found`)
      return res.status(404).send("Book Listing not found")
    }

    // Log the ID of the listing to be deleted
    console.log(`Deleting book listing with ID: ${req.params.id}`)
    await BookListing.deleteOne({ _id: req.params.id })

    return res.status(204).send()
  } catch (e: any) {
    console.error("Error deleting listing:", e)
    return res.status(500).send("Internal Server Error")
  }
}
  /*

export const deleteBookListing: HTTPHandler = async (req, res) => {
	try {
	  const bookListing = await BookListing.findById(req.params.id)
  
	  if (!bookListing) {
		return res.status(404).send("Book Listing not found") // Return early if not found
	  }
  
	  if (bookListing.firebaseUid !== req.body.firebaseUid) {
		return res.status(403).send("Unauthorized to delete this listing") // Return early if unauthorized
	  }
  
	  await BookListing.deleteOne({ _id: req.params.id })
	  
	  return res.status(204).send()
	} catch (e: any) {
	  return res.status(404).send("Book Listing not found")
	}
  }

  */