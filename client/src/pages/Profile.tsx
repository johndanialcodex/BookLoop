import "../styles/Profile.css"

import UserInfo from "../components/UserInfo"
import UserListings from "../components/UserListings"
import UserMessages from "../components/UserMessages"

import { Link } from 'react-router-dom'

const Profile = () => {
  return (
    <div className="profile">
        <UserInfo />
        <UserListings />
        <Link to="/browse">Browse More Listings!</Link>
        <div>User Messages:
          <UserMessages messages={[]}/>
          </div>
        <Link to="/">Go Back to Home Page</Link>
    </div>
  )
}

export default Profile