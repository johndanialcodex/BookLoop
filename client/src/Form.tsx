import { useState, FC } from "react"
import Shoutout from "./interfaces/Shoutout"

interface Props {
	addShoutout: (newShoutout: Shoutout) => void
}
const Form: FC<Props> = ({ addShoutout }) => {
	const [newShoutout, setNewShoutout] =
		useState<Shoutout>({
			to: "",
			from: "",
			text: ""
		})

	return (
		<div>
			<label htmlFor="to">to: </label>
			<input
				type="text"
				name="to"
				id="to"
				value={newShoutout.to}
				onChange={e =>
					setNewShoutout({
						...newShoutout,
						to: e.target.value
					})
				}
			/>
			<label htmlFor="from">from: </label>
			<input
				type="text"
				name="from"
				id="from"
				value={newShoutout.from}
				onChange={e =>
					setNewShoutout({
						...newShoutout,
						from: e.target.value
					})
				}
			/>
			<label htmlFor="text">text: </label>
			<input
				type="text"
				name="text"
				id="text"
				value={newShoutout.text}
				onChange={e =>
					setNewShoutout({
						...newShoutout,
						text: e.target.value
					})
				}
			/>
			<button
				onClick={() => {
					addShoutout(newShoutout)
					setNewShoutout({
						to: "",
						from: "",
						text: ""
					})
				}}
			>
				Submit
			</button>
		</div>
	)
}
export default Form
