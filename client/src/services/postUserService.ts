import axios from "axios"

export const postUser = async (username: string, city: string) => {
	console.log(import.meta.env.VITE_API_URL)
	const response = await axios.post(
	  `${import.meta.env.VITE_API_BASE_URL}/user`,
	  { username, city }
	)
	return response
  }