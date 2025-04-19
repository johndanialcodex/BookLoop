import "../styles/Profile.css"
import UserInfo from "../components/UserInfo"
import UserListings from "../components/UserListings"
import UserMessages from "../components/UserMessages"
import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from "react"
import axios from "axios"
import { User } from "../interfaces/User"
import HeaderLoggedIn from "../components/HeaderLoggedIn"

const Profile = () => {
  const { id } = useParams()
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/user/${id}`)
        setUser(res.data)
      } catch (err) {
        console.error("Error fetching user:", err)
      }
    }

    if (id) fetchUser()
  }, [id])

  if (!user) return <p>Loading profile...</p>

  return (
    <div className="profile">
      <div className="header-logged-in-container">
        <HeaderLoggedIn />
      </div>
      <UserInfo name={user.username} city={user.city} />
      <div className="dashboard-container">
        <div className="my-books-section">
          <h2 className="my-books-label">My Books:</h2>
          <UserListings />
          <h3 className="browse-link">
            <Link to={`/browse/city/${user.city}/user/${user._id}`}>
              Browse for books in {user.city}
            </Link>
          </h3>
        </div>
        <div className="message-section">
          <h2 className="my-messages-label">My Messages:</h2>
          <UserMessages user={user} />
        </div>
      </div>
    </div>
  )
}

export default Profile