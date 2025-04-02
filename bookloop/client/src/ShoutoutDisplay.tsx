import Shoutout from "./interfaces/Shoutout"
import { FC } from "react"

interface Props {
	shoutout: Shoutout
}
const ShoutoutDisplay: FC<Props> = ({ shoutout }) => (
	<li>
		<h6>
			to: {shoutout.to}, from: {shoutout.from}
		</h6>
		<p>{shoutout.text}</p>
	</li>
)
export default ShoutoutDisplay
