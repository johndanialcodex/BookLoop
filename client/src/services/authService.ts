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

const postUser = async (token: string, email: string, name: string) => {
  const response = await axios.post(
    `${import.meta.env.VITE_API_BASE_URL}/profile`,
    { firebaseUid: auth.currentUser?.uid, email, name },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )
  return response.data;
}

export default postUser