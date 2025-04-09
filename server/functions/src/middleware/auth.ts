import {
	Request,
	Response,
	NextFunction
} from "express"
import { getAuth } from "firebase-admin/auth"

const checkAuth = async (req: Request, res: Response, next: NextFunction) => {
	const authHeader = req.headers.authorization
  
	if (!authHeader?.startsWith("Bearer ")) {
	  res.status(401).send("Forbidden")
	} else {
	  const token = authHeader.split("Bearer ")[1]
	  try {
		const decodedToken = await getAuth().verifyIdToken(token)
		req.body.firebaseUid = decodedToken.uid; // save Firebase UID in the request body
		next()
	  } catch (error) {
		res.status(401).send("Invalid or expired token")
	  }
	}
  }
  
  export default checkAuth

/*
const checkAuth = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const authHeader = req.headers.authorization

	if (!authHeader?.startsWith("Bearer "))
		res.status(401).send("Forbidden")
	else {
		const token = authHeader.split("Bearer ")[1]
		try {
			req.body.loggedInUser = token
			next()
		} catch (error) {
			res.status(401).send("Invalid or expired token")
		}
	}
}

export default checkAuth
*/