import axios from "axios"
import { auth } from "../firebase"

const baseUrl =
	import.meta.env.VITE_API_BASE_URL + "/secret"

export const getSecret = async (): Promise<any> => {
	const user = auth.currentUser
	if (!user) throw new Error("Not Logged In")
	const token = await user.getIdToken()
	return (
		await axios.get(baseUrl, {
			headers: {
				Authorization: `Bearer ${token}`
			}
		})
	).data
}

export const postUser = async (username: string, city: string) => {
	console.log(import.meta.env.VITE_API_BASE_URL)
	const response = await axios.post(
	  `${import.meta.env.VITE_API_BASE_URL}/user`,
	  { username, city }
	)
	return response.data
  }
