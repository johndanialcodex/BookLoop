import Message from "../models/Message"
import HTTPHandler from "../interfaces/HTTPHandler"

// CREATE

export const postMessage: HTTPHandler = async (req, res) => {
	const { senderId, receiverId, message } = req.body
  
	try {
	  const newMessage = new Message({
		senderId, // MongoDB _id for sender
		receiverId, // MongoDB _id for receiver
		message,
	  })
  
	  await newMessage.save()
	  res.status(201).send(newMessage)
	} catch (e: any) {
	  res.status(403).send("Invalid Request")
	}
  }

/*
export const postMessage: HTTPHandler = async (req, res) => {
    const { senderId, receiverId, message } = req.body

    try {
        const newMessage = new Message({
            senderId, // Firebase UID of sender
            receiverId, // Firebase UID of receiver
            message,
        })
        await newMessage.save()
        res.status(201).send(newMessage)
    } catch (e: any) {
        res.status(403).send("Invalid Request")
    }
}
*/
// READ ALL
export const getMessages: HTTPHandler = async (req, res) => {
	const { user } = req.query
  
	try {
	  const messages = await Message.find({
		$or: [{ senderId: user }, { receiverId: user }],
	  })
  
	  res.status(200).send(messages)
	} catch (e: any) {
	  res.status(500).send("Internal Server Error")
	}
  }

/*

export const getMessages: HTTPHandler = async (req, res) => {
    const { userId } = req.params // Get the user's Firebase UID (from frontend)
    try {
        const messages = await Message.find({
            $or: [{ senderId: userId }, { receiverId: userId }],
        })
        res.status(200).send(messages);
    } catch (e: any) {
        res.status(500).send("Internal Server Error")
    }
}

*/

// READ ONE

export const getMessage: HTTPHandler = async (req, res) => {
	try {
	  const message = await Message.findById(req.params.id)
	  if (!message) {
		return res.status(404).send("Message not found")
	  }
	  return res.status(200).send(message)
	} catch (e: any) {
	  return res.status(404).send("Message not found")
	}
  }

/*

export const getMessage: HTTPHandler = async (req, res) => {
    try {
        const message = await Message.findById(req.params.id)
        if (!message) {
            return res.status(404).send("Message not found")
        }
        return res.status(200).send(message)
    } catch (e: any) {
        return res.status(404).send("Message not found")
    }
}

*/

// UPDATE

export const putMessage: HTTPHandler = async (req, res) => {
	try {
	  const message = await Message.findByIdAndUpdate(req.params.id, req.body, { new: true })
	  if (!message) throw new Error()
	  await message.save()
	  res.status(200).send(message)
	} catch (e: any) {
	  res.status(404).send("Message not found")
	}
  }

/*

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

*/

// DESTROY

export const deleteMessage: HTTPHandler = async (req, res) => {
	try {
	  await Message.findByIdAndDelete(req.params.id)
	  return res.status(204).send()
	} catch (e: any) {
	  return res.status(404).send("Message not found")
	}
  }

/*

export const deleteMessage: HTTPHandler = async (req, res) => {
    try {
        await Message.findByIdAndDelete(req.params.id)
        return res.status(204).send()
    } catch (e: any) {
        return res.status(404).send("Message not found")
    }
}

*/