import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import BookListing from './BookListings'
import Booklisting from '../interfaces/Booklisting'
import { fetchListingsByUser, deleteListingById } from '../services/listingService'

const UserListings = () => {
  const { id } = useParams()
  const [bookListings, setBookListings] = useState<Booklisting[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (id) {
          const listings = await fetchListingsByUser(id)
          console.log("Fetched listings:", listings)
          setBookListings(Array.isArray(listings) ? listings : [])
        }
      } catch (error) {
        console.error("Error fetching book listings:", error)
      }
    }

    fetchData()
  }, [id])

  const handleDelete = async (listingId: string) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this listing?")
    if (confirmDelete) {
      try {
        await deleteListingById(listingId)
        setBookListings(prev => prev.filter(listing => listing.id !== listingId))
      } catch (error) {
        console.error("Error deleting listing:", error)
      }
    }
  }

  return (
    <>
      <div className="my-book-wrapper">
        <div className="my-books">
          <div className="my-books-list">
            <ul>
              {bookListings.length > 0 ? (
                bookListings.map((listing) => (
                  <li key={listing.id}>
                    <div className="book-item">
                      <BookListing listing={listing} />
                      <div className="book-actions">
                        <button onClick={() => handleDelete(listing.id!)} className="delete-button">
                          Delete
                        </button>
                        <Link to={`/edit-listing/${id}/${listing.id}`}>
                          <button className="edit-button">Edit</button>
                        </Link>
                      </div>
                    </div>
                  </li>
                ))
              ) : (
                <p>You haven't listed any books yet. <Link to={`/create-listing/${id}`}>Start a Swap here!</Link></p>
              )}
            </ul>
          </div>
        </div>
      </div>
      <h3 className="start-swap">
        <Link to={`/create-listing/${id}`}>List a book and start swapping!</Link>
      </h3>
    </>
  )
}

export default UserListings