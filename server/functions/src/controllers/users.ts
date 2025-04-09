import User from "../models/User"
import HTTPHandler from "../interfaces/HTTPHandler"
import { auth } from '../firebaseAdmin'

// CREATE
export const postUser: HTTPHandler = async (req: Request, res: Response) => {
	const { firebaseUid, name, city } = req.body;  // Expecting firebaseUid, name, and city
  
	try {
	  // Validate the Firebase UID using Firebase Admin SDK
	  const firebaseUser = await auth.getUser(firebaseUid);
  
	  if (!firebaseUser) {
		// If the Firebase user is not found, return an error
		return res.status(404).send("Firebase user not found");
	  }
  
	  // If Firebase user is valid, create the user in your MongoDB
	  const user = new User({
		firebaseUid,
		name,
		city,
	  });
  
	  await user.save();  // Save user to MongoDB
  
	  // Return the created user
	  res.status(201).send(user);
	} catch (error: any) {
	  console.error(error);
	  res.status(500).send("Internal Server Error");
	}
  };


// READ

export const getUsers: HTTPHandler = async (
	req,
	res
) => {
	try {
		const users = await User.find()
		res.status(200).send(users)
	} catch (e: any) {
		res.status(500).send("Internal Server Error")
	}
}

// READ ONE

export const getUser: HTTPHandler = async (req, res) => {
	const { firebaseUid } = req.params
	try {
	  const user = await User.findOne({ firebaseUid })
	  if (!user) {
		return res.status(404).send("User not found")
	  }
	  return res.status(200).send(user)
	} catch (e: any) {
	  return res.status(500).send("Internal Server Error")
	}
  }

// UPDATE

export const putUser: HTTPHandler = async (
	req,
	res
) => {
	try {
		const user = await User.findByIdAndUpdate(
			req.params.id,
			req.body,
			{ new: true }
		)
		if (!user) throw new Error()
		await user.save()
		res.status(200).send(user)
	} catch (e: any) {
		res.status(404).send("User not found")
	}
}

// DESTROY

export const deleteUser: HTTPHandler = async (
	req,
	res
) => {
	try {
		await User.findByIdAndDelete(req.params.id)
		res.status(204).send()
	} catch (e: any) {
		res.status(404).send("User not found")
	}
}