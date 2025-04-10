import express from "express"
import { onRequest } from "firebase-functions/v2/https"
import cors from "cors"

import secretsRouter from "./routes/secretsRouter"
import establishConnection from "./middleware/establishConnection"
import checkAuth from "./middleware/auth"

import bookListingsRouter from "./routes/bookListingsRouter"
import messagesRouter from "./routes/messagesRouter"
import usersRouter from "./routes/usersRouter"

const app = express()

app.use(cors())
app.use(express.json())
app.use(establishConnection)
app.use("/bookListings", bookListingsRouter)
app.use("/messages", messagesRouter)
app.use("/user", usersRouter)
app.use("/secret", checkAuth, secretsRouter)

export const api = onRequest(app)
