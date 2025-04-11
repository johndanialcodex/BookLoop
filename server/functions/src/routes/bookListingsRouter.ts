import { Router } from "express"
import {
	getBookListings,
	getBookListing,
	postBookListing,
	putBookListing,
	deleteBookListing
} from "../controllers/bookListings"

const routes = Router()

routes.post("/", (req, res, next) => {
	console.log("Request reached the POST route");
	next();
  }, postBookListing);

routes.post("/", postBookListing)
routes.get("/", getBookListings)
routes.get("/:id", getBookListing)
routes.put("/:id", putBookListing)
routes.delete("/:id", deleteBookListing)

export default routes
