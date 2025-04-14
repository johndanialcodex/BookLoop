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

import { UserContextProvider } from "./contexts/UserContext";
import BookListingsDisplay from "./components/BookListingsDisplay";

function App() {

  return (
    <>
    <UserContextProvider>
      <Router>
        <Routes>
        <Route path="/" element={<Home />} />
		<Route path="/profile" element={<Profile />} />
		<Route path="/browse" element={<BrowseListings />} />
		<Route path="/create-listing" element={<CreateListing />} />
		<Route path="/create-profile" element={<CreateProfile />} />
    <Route path="/profile/:id" element={<Profile />} />
    <Route path="/create-listing/:id" element={<CreateListing />} />
    <Route path="/browse/city/:city/user/:id" element={<BookListingsDisplay />} />
		<Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
    </UserContextProvider>
    </>
  )
}

export default App
