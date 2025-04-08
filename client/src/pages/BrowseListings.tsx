import "../styles/Profile.css"

import BookListingsDisplay from "../components/BookListingsDisplay"

const BrowseListings = () => {
  return (
    <div className="browse-listings">
        <BookListingsDisplay />
        <div>Link to go back to Home Page...</div>
    </div>
  )
}

export default BrowseListings