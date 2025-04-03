import {
	BrowserRouter as Router,
	Routes,
	Route
} from "react-router-dom"
import ShoutoutList from "./ShoutoutList"
import Login from "./Login"
import ProtectedRoute from "./ProtectedRoute"

const App = () => (
	<Router>
		<Routes>
			<Route
				path="/"
				element={<Login />}
			/>
			<Route element={<ProtectedRoute />}>
				<Route
					path="/shoutouts"
					element={<ShoutoutList />}
				/>
			</Route>
		</Routes>
	</Router>
)
export default App
