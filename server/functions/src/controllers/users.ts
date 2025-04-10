import User from "../models/User"
import HTTPHandler from "../interfaces/HTTPHandler"

  
//CREATE

export const postUser: HTTPHandler = async (req, res) => {
	const { username, city } = req.body
	
	try {
	  const user = new User({ username, city })
	  await user.save()
	  res.status(201).send(user)
	} catch (err) {
	  res.status(400).send("Bad request.")
	}
  }

  /*

export const postUser: HTTPHandler = async (req, res) => {
    try {
        const { username, city } = req.body // Extract from req.body
        const firebaseUid = req.body.firebaseUid // Firebase UID from middleware
        const user = new User({ firebaseUid, username, city })
        await user.save()
        res.status(201).send(user)
    } catch (err) {
        res.status(400).send("Bad request.")
    }
}
*/

// READ

export const getUsers: HTTPHandler = async (req, res) => {
	try {
	  const users = await User.find()
	  res.status(200).send(users)
	} catch (e: any) {
	  res.status(500).send("Internal Server Error")
	}
  }

/*

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

*/

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

/*

export const getUser: HTTPHandler = async (req, res) => {
    const { firebaseUid } = req.params
    try {
        const user = await User.findOne({ firebaseUid }) // Use Firebase UID to find user
        if (!user) {
            return res.status(404).send("User not found")
        }
        return res.status(200).send(user)
    } catch (e: any) {
        return res.status(500).send("Internal Server Error")
    }
}

*/

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

  /*


export const putUser: HTTPHandler = async (req, res) => {
    const { firebaseUid } = req.body // Assuming firebaseUid is passed in the body
    try {
        const user = await User.findOneAndUpdate(
            { firebaseUid }, // Find by Firebase UID
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

*/

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

/*

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

*/