import axios from "axios"
import Booklisting from "../interfaces/Booklisting"

export const postBookListing = async (listing: Omit<Booklisting, "id">) => {
  const response = await axios.post(
    `${import.meta.env.VITE_API_BASE_URL}/bookListings`,
    listing
  )
  return response
}

export const fetchListingsByUser = async (userId: string): Promise<Booklisting[]> => {
  const response = await axios.get(
    `${import.meta.env.VITE_API_BASE_URL}/bookListings?user=${userId}`
  )
  return response.data
}

export const fetchListingById = async (listingId: string): Promise<Booklisting> => {
  const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/bookListings/${listingId}`)
  return response.data
}

export const updateListingById = async (listingId: string, updatedListing: Booklisting) => {
  await axios.put(`${import.meta.env.VITE_API_BASE_URL}/bookListings/${listingId}`, updatedListing)
}

export const deleteListingById = async (listingId: string) => {
  await axios.delete(`${import.meta.env.VITE_API_BASE_URL}/bookListings/${listingId}`)
}