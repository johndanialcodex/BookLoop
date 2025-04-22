import { Link, useParams } from 'react-router-dom'
import "../styles/HeaderLoggedIn.css"
import { useEffect, useState } from "react"
import { User } from "../interfaces/User"
import { fetchUserById } from "../services/postUserService"
import logo from "../assets/Logo2.png"

const HeaderLoggedIn = () => {
  const { id } = useParams()
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const getUser = async () => {
      try {
        if (id) {
          const fetchedUser = await fetchUserById(id)
          setUser(fetchedUser)
        }
      } catch (err) {
        console.error("Error fetching user:", err)
      }
    }

    getUser()
  }, [id])

  if (!user) return <p>Loading profile...</p>

  return (
    <header className="header">
      <img src={logo} alt="BookLoop Logo" className="headerLoggedIn__logo" />
      <nav className="header__nav">
        <p><Link to={`/${id}`} className="header__link">Home</Link></p>
        <p><Link to={`/profile/${id}`} className="header__link">Profile</Link></p>
        <p><Link to={`/create-listing/${id}`} className="header__link">List A Book</Link></p>
        <p><Link to={`/browse/city/${user.city}/user/${user._id}`} className="header__link">Browse For Books</Link></p>
      </nav>
    </header>
  )
}

export default HeaderLoggedIn