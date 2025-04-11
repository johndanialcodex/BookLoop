import axios from "axios"
import Booklisting from "../interfaces/BookListing"

// Use the correct environment variable VITE_API_BASE_URL
const API = `${import.meta.env.VITE_API_BASE_URL}/bookListings`
console.log("API URL:", API)  // Log to verify the URL is correct

export const createBookListing = async (form: Omit<Booklisting, "id">) => {
  try {
    const response = await axios.post(API, form)
    return response.data
  } catch (err) {
    console.error("Error creating book listing:", err)
    throw err
  }
}

export const getAllBookListings = async (): Promise<Booklisting[]> => {
  try {
    const response = await axios.get(API)
    return response.data
  } catch (err) {
    console.error("Error fetching book listings:", err)
    throw err
  }
}