import User from "../models/User"
import HTTPHandler from "../interfaces/HTTPHandler"

  
//CREATE

export const postUser: HTTPHandler = async (req, res) => {
	try {
	  const user = new User(req.body)
	  await user.save()
	  console.log(user)
	  res.status(201).send(user)
	} catch (err) {
	  res.status(400).send("Bad Request")
	}
  }


// READ

export const getUsers: HTTPHandler = async (req, res) => {
	try {
	  const { city } = req.query
  
	  let users
  
	  if (city) {
		users = await User.find({ city: { $regex: new RegExp(city as string, 'i') } })
	  } else {
		users = await User.find()
	  }
  
	  res.status(200).send(users)
	} catch (e: any) {
	  console.error(e)
	  res.status(500).send("Internal Server Error")
	}
  }
  

// READ ONE

export const getUser: HTTPHandler = async (req, res) => {
	const { id } = req.params
	
	try {
	  const user = await User.findById(id)
	  if (!user) {
		return res.status(404).send("User not found")
	  }
	  return res.status(200).send(user)
	} catch (e: any) {
	  return res.status(500).send("Internal Server Error")
	}
  }


// UPDATE

export const putUser: HTTPHandler = async (req, res) => {
	const { id } = req.params
  
	try {
	  const user = await User.findByIdAndUpdate(id, req.body, { new: true })
	  if (!user) throw new Error()
	  res.status(200).send(user)
	} catch (e: any) {
	  res.status(404).send("User not found")
	}
  }


// DESTROY

export const deleteUser: HTTPHandler = async (req, res) => {
	const { id } = req.params
	
	try {
	  await User.findByIdAndDelete(id)
	  res.status(204).send()
	} catch (e: any) {
	  res.status(404).send("User not found")
	}
  }