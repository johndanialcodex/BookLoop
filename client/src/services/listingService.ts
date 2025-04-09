import axios from "axios"
import Booklisting from "../interfaces/Booklisting"

const API_BASE = "/api/bookListings"

export const createBookListing = async (form: Omit<Booklisting, "id">) => {
  const response = await axios.post(API_BASE, form)
  return response.data
}

export const getAllBookListings = async (): Promise<Booklisting[]> => {
  const response = await axios.get(API_BASE)
  return response.data
}