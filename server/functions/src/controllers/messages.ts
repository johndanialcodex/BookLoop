import Message from "../models/Message"
import HTTPHandler from "../interfaces/HTTPHandler"

// CREATE

export const postMessage: HTTPHandler = async (
	req,
	res
) => {
	try {
		const message = new Message(req.body)
		await message.save()
		res.status(201).send(message)
	} catch (e: any) {
		res.status(403).send("Invalid Request")
	}
}

// READ ALL

export const getMessages: HTTPHandler = async (
	req,
	res
) => {
	try {
		const messages = await Message.find()
		res.status(200).send(messages)
	} catch (e: any) {
		res.status(500).send("Internal Server Error")
	}
}

// READ ONE

export const getMessage: HTTPHandler = async (
	req,
	res
) => {
	try {
		const message = await Message.findById(
			req.params.id
		)
		res.status(200).send(message)
	} catch (e: any) {
		res.status(404).send("Message not found")
	}
}

// UPDATE

export const putMessage: HTTPHandler = async (
	req,
	res
) => {
	try {
		const message = await Message.findByIdAndUpdate(
			req.params.id,
			req.body,
			{ new: true }
		)
		if (!message) throw new Error()
		await message.save()
		res.status(200).send(message)
	} catch (e: any) {
		res.status(404).send("Message not found")
	}
}

// DESTROY

export const deleteMessage: HTTPHandler = async (
	req,
	res
) => {
	try {
		await Message.findByIdAndDelete(req.params.id)
		res.status(204).send()
	} catch (e: any) {
		res.status(404).send("Message not found")
	}
}
