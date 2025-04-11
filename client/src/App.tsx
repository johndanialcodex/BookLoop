import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
 } from "react-router-dom";

import Home from './pages/Home'
import Profile from "./pages/Profile";
import BrowseListings from "./pages/BrowseListings";
import CreateListing from "./pages/CreateListing";
import Login from "./pages/Login";
import CreateProfile from "./pages/CreateProfile";

function App() {

  return (
    <>
      <Router>
        <Routes>
        <Route path="/" element={<Home />} />
		<Route path="/profile" element={<Profile />} />
		<Route path="/browse" element={<BrowseListings />} />
		<Route path="/create-listing" element={<CreateListing />} />
		<Route path="/create-profile" element={<CreateProfile />} />
    <Route path="/profile/:id" element={<Profile />} />
    <Route path="/create-listing/:id" element={<CreateListing />} />
		<Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
