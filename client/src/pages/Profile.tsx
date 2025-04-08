import "../styles/Profile.css"

import UserInfo from "../components/UserInfo"
import UserListings from "../components/UserListings"
import UserMessages from "../components/UserMessages"

const Profile = () => {
  return (
    <div className="profile">
        <UserInfo />
        <UserListings />
        <div>"Browse More Listings!" Link to Browse Listings Page...</div>
        <UserMessages />
        <div>Link to go back to Home Page...</div>
    </div>
  )
}

export default Profile