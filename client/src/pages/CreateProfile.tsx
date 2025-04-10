import CreateProfileForm from "../components/CreateProfileForm"
import { Link } from 'react-router-dom'

const CreateProfile= () => {
  return (
    <div className="create-profile">
        <CreateProfileForm />
        <Link to="/">Go Back to Home Page</Link>
    </div>
  )
}

export default CreateProfile