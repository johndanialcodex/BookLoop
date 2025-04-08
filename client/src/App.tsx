import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
 } from "react-router-dom";

import Home from './pages/Home'
import Profile from "./pages/Profile";

function App() {

  return (
    <>
      <Router>
        <Routes>
        <Route path="/" element={<Home />} />
		<Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
