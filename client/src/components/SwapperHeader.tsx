import { Link } from 'react-router-dom'
import "../styles/HeaderLoggedIn.css"
import { useEffect, useState } from "react"
import { User } from "../interfaces/User"
import { fetchUserById } from "../services/postUserService"
import logo from "../assets/Logo2.png"

const SwapperHeader = () => {
  const queryParams = new URLSearchParams(window.location.search)
  const myId = queryParams.get("myId")

  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const getUser = async () => {
      try {
        if (myId) {
          const fetchedUser = await fetchUserById(myId)
          setUser(fetchedUser)
        }
      } catch (err) {
        console.error("Error fetching user", err)
      }
    }

    getUser()
  }, [myId])

  if (!user) return <p>Loading user...</p>

  return (
    <header className="header">
      <img src={logo} alt="BookLoop Logo" className="headerLoggedIn__logo" />
      <nav className="header__nav">
        <p><Link to={`/profile/${myId}`} className="header__link">Profile</Link></p>
        <p><Link to={`/create-listing/${myId}`} className="header__link">List A Book</Link></p>
        <p><Link to={`/browse/city/${user.city}/user/${user._id}`} className="header__link">Browse For Books</Link></p>
      </nav>
    </header>
  )
}

export default SwapperHeader