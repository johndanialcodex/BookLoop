import ListingForm from "../components/CreateListingForm"
import "../styles/CreateListing.css"
import HeaderLoggedIn from "../components/HeaderLoggedIn"

const CreateListing= () => {
  return (
    <>
    <div className="header-logged-in-container">
        <HeaderLoggedIn />
        </div>
    <div className="listing-form-container">
        <ListingForm />
    </div>
    </>
  )
}

export default CreateListing