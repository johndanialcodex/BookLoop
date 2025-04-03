import { useState, useEffect } from "react"
import Shoutout from "./interfaces/Shoutout"
import ShoutoutDisplay from "./ShoutoutDisplay"
import {
	getShoutouts,
	postShoutout
} from "./services/shoutoutService"
import Form from "./Form"
import { getSecret } from "./services/authService"

const ShoutoutList = () => {
	const [shoutouts, setShoutouts] = useState<
		Shoutout[]
	>([])
	useEffect(() => {
		getShoutouts().then(sos => setShoutouts(sos))
		getSecret().then(seceret => console.log(seceret))
	}, [])
	const addShoutout = async (
		newShoutout: Shoutout
	) => {
		const postedShoutout = await postShoutout(
			newShoutout
		)
		setShoutouts([...shoutouts, postedShoutout])
	}
	return (
		<>
			<h1>Shoutouts</h1>
			<Form addShoutout={addShoutout} />
			<ul>
				{shoutouts.map(shoutout => (
					<ShoutoutDisplay
						shoutout={shoutout}
						key={shoutout._id}
					/>
				))}
			</ul>
		</>
	)
}
export default ShoutoutList
