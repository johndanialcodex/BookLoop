import axios from "axios"
import Shoutout from "../interfaces/Shoutout"

const baseUrl =
	import.meta.env.VITE_API_BASE_URL + "/shoutouts"

export const getShoutouts = async (): Promise<
	Shoutout[]
> => (await axios.get(baseUrl)).data

export const postShoutout = async (
	shoutout: Shoutout
): Promise<Shoutout> =>
	(await axios.post(baseUrl, shoutout)).data
