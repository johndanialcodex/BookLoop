import { Router } from "express"
import {
    getUsers,
    getUser,
    postUser,
    putUser,
    deleteUser
} from "../controllers/users"

const routes = Router()

routes.post("/", postUser)
routes.get("/", getUsers)
routes.get("/:firebaseUid", getUser)
routes.put("/:firebaseUid", putUser)
routes.delete("/:firebaseUid", deleteUser)

export default routes