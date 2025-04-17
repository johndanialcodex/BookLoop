import "../styles/Profile.css"
import UserInfo from "../components/UserInfo"
import BookListing from "../components/BookListings"
import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from "react"
import axios from "axios"
import { User } from "../interfaces/User"
import SwapperHeader from "../components/SwapperHeader"
import Booklisting from "../interfaces/Booklisting"

const SwapperProfile = () => {
  const { id } = useParams()
  const queryParams = new URLSearchParams(window.location.search)
  const myId = queryParams.get("myId")

  const [user, setUser] = useState<User | null>(null)
  const [bookListings, setBookListings] = useState<Booklisting[]>([])

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/user/${id}`)
        setUser(res.data)
      } catch (err) {
        console.error("Error fetching swapper:", err)
      }
    }

    const fetchBookListings = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/bookListings?user=${id}`)
        setBookListings(Array.isArray(response.data) ? response.data : [])
      } catch (error) {
        console.error("Error fetching swapper's listings:", error)
      }
    }

    if (id) {
      fetchUser()
      fetchBookListings()
    }
  }, [id])

  if (!user) return <p>Loading profile...</p>

  return (
    <div className="profile">
      <div className="header-logged-in-container">
        <SwapperHeader />
      </div>

      <UserInfo name={user.username} city={user.city} />
      
      <h2 className="my-books-label">{user.username}'s Books:</h2>
      <div className="my-book-wrapper">
        <div className="my-books-list">
          <ul>
            {bookListings.length > 0 ? (
              bookListings.map((listing) => (
                <li key={listing.id}>
                  <div className="book-item">
                    <BookListing listing={listing} />
                  </div>
                </li>
              ))
            ) : (
              <p>{user.username} hasn't listed any books yet.</p>
            )}
          </ul>
        </div>
      </div>

      {myId && (
        <h3 className="browse-link">
          <Link to={`/profile/${myId}`}>← Back to My Profile</Link>
        </h3>
      )}
    </div>
  )
}

export default SwapperProfile