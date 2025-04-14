import "../styles/Profile.css"
import UserInfo from "../components/UserInfo"
import UserListings from "../components/UserListings"
import UserMessages from "../components/UserMessages"
import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from "react"
import axios from "axios"
import { User } from "../interfaces/User"

const Profile = () => {
  const { id } = useParams()
  const [user, setUser] = useState<User | null>(null)
  //const [user, setUser] = useState(null)

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
        <UserInfo name={user.username} city={user.city} />
        <UserListings />
        <h3><Link to={`/browse/city/${user.city}/user/${user._id}`}>Browse for books in {user.city}</Link></h3>
        <div><h2>My Messages:</h2>
        <UserMessages user={user} />
          </div>
        <Link to="/">Go Back to Home Page</Link>
    </div>
  )
}

export default Profile