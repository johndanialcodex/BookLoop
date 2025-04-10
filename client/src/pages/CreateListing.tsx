import ListingForm from "../components/CreateListingForm"
import { Link } from 'react-router-dom'

const CreateListing= () => {
  return (
    <div className="list-book">
        <ListingForm />
        <Link to="/">Go Back to Home Page</Link>
    </div>
  )
}

export default CreateListing