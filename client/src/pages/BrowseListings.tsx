import "../styles/Profile.css"
import { Link } from 'react-router-dom'

import BookListingsDisplay from "../components/BookListingsDisplay"

const BrowseListings = () => {
  return (
    <div className="browse-listings">
        <BookListingsDisplay />
        <Link to="/">Go Back to Home Page</Link>
    </div>
  )
}

export default BrowseListings