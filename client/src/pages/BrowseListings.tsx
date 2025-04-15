import "../styles/Browse.css"
import { Link } from 'react-router-dom'
import BookListingsDisplay from "../components/BookListingsDisplay"
import HeaderLoggedIn from "../components/HeaderLoggedIn"

const BrowseListings = () => {
  return (
    <>
    <div className="header-logged-in-container">
        <HeaderLoggedIn />
        </div>
    <div className="browse-listings">
        <BookListingsDisplay />
        <Link to="/">Go Back to Home Page</Link>
    </div>
    </>
  )
}

export default BrowseListings