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
        <div>"Browse More Listings!" Link to Browse Listings Page...</div>
        <UserMessages />
        <Link to="/">Go Back to Home Page</Link>
    </div>
  )
}

export default Profile