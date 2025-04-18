import axios from "axios"
import { User } from "../interfaces/User"

export const postUser = async (username: string, city: string) => {
	console.log(import.meta.env.VITE_API_URL)
	const response = await axios.post(
	  `${import.meta.env.VITE_API_BASE_URL}/user`,
	  { username, city }
	)
	return response
  }

  export const fetchUsersByCity = async (city: string): Promise<User[]> => {
	const response = await axios.get(
	  `${import.meta.env.VITE_API_BASE_URL}/user?city=${city}`
	)
	return response.data
  }

  export const fetchUsernameById = async (userId: string): Promise<string> => {
	const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/user/${userId}`)
	return res.data.username
  }