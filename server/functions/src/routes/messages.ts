import { Router } from "express"
import {
	getMessages,
	getMessage,
	postMessage,
	putMessage,
	deleteMessage
} from "../controllers/messages"

const routes = Router()

routes.post("/", postMessage)
routes.get("/", getMessages)
routes.get("/:id", getMessage)
routes.put("/:id", putMessage)
routes.delete("/:id", deleteMessage)

export default routes