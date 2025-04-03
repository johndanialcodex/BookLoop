import User from "../models/User"
import HTTPHandler from "../interfaces/HTTPHandler"

// CREATE

export const postUser: HTTPHandler = async (
	req,
	res
) => {
	try {
		const user = new User(req.body)
		await user.save()
		res.status(201).send(user)
	} catch (e: any) {
		res.status(403).send("Invalid Request")
	}
}

// READ

export const getusers: HTTPHandler = async (
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

export const getuser: HTTPHandler = async (
	req,
	res
) => {
	try {
		const user = await User.findById(
			req.params.id
		)
		res.status(200).send(user)
	} catch (e: any) {
		res.status(404).send("Shouout not found")
	}
}

// UPDATE

export const putuser: HTTPHandler = async (
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
		res.status(404).send("Shouout not found")
	}
}

// DESTROY

export const deleteuser: HTTPHandler = async (
	req,
	res
) => {
	try {
		await User.findByIdAndDelete(req.params.id)
		res.status(204).send()
	} catch (e: any) {
		res.status(404).send("Shouout not found")
	}
}