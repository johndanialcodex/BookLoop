import "../styles/Profile.css"

import UserInfo from "../components/UserInfo"
import UserListings from "../components/UserListings"
import UserMessages from "../components/UserMessages"

const Profile = () => {
  return (
    <div className="home">
        <UserInfo />
        <UserListings />
        <UserMessages />
    </div>
  )
}

export default Profile