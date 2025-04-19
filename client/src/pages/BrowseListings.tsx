import "../styles/Browse.css"
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
    </div>
    </>
  )
}

export default BrowseListings