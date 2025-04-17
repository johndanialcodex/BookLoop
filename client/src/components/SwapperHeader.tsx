import { Link } from 'react-router-dom'
import "../styles/HeaderLoggedIn.css"
import { useEffect, useState } from "react"
import axios from "axios"
import { User } from "../interfaces/User"
import { useParams } from 'react-router-dom'

import logo from "../assets/Logo2.svg"

const SwapperHeader = () => {
  const { id } = useParams() // Get swapper's ID from params
  const queryParams = new URLSearchParams(window.location.search)
  const myId = queryParams.get("myId") // Get logged-in user's ID from query params

  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/user/${myId}`) // Fetch the logged-in user's details
        setUser(res.data)
      } catch (err) {
        console.error("Error fetching user:", err)
      }
    }

    if (myId) fetchUser()
  }, [myId])

  if (!user) return <p>Loading user...</p>

  return (
    <header className="header">
      <img src={logo} alt="BookLoop Logo" className="headerLoggedIn__logo" />
      <nav className="header__nav">
        <p><Link to="/" className="header__link">Home</Link></p>
        <p><Link to={`/profile/${myId}`} className="header__link">Profile</Link></p> {/* Link back to logged-in user's profile */}
        <p><Link to={`/create-listing/${myId}`} className="header__link">List A Book</Link></p>
        <p><Link to={`/browse/city/${user.city}/user/${user._id}`} className="header__link">Browse For Books</Link></p>
      </nav>
    </header>
  )
}

export default SwapperHeader