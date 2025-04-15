import { Link } from 'react-router-dom'
import "../styles/HeaderLoggedIn.css"
import { useEffect, useState } from "react"
import axios from "axios"
import { User } from "../interfaces/User"
import { useParams } from 'react-router-dom'

import logo from "../assets/Logo2.svg"


const HeaderLoggedIn = () => {
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
        <header className="header">
          <img src={logo} alt="BookLoop Logo" className="headerLoggedIn__logo" />
          <nav className="header__nav">
            <p><Link to="/" className="header__link">Home</Link></p>
            <p><Link to={`/profile/${id}`} className="header__link">Profile</Link></p>
            <p><Link to={`/create-listing/${id}`} className="header__link">List A Book</Link></p>
            <p><Link to={`/browse/city/${user.city}/user/${user._id}`} className="header__link">Browse For Books</Link></p>
          </nav>
        </header>
      )
  }
  
  export default HeaderLoggedIn