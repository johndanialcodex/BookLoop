import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import BookListing from './BookListings'
import Booklisting from '../interfaces/Booklisting'
import DeleteBookListing from './DeleteBookListing'
import { fetchListingsByUser, deleteListingById } from '../services/listingService'

const UserListings = () => {
  const { id } = useParams()
  const [bookListings, setBookListings] = useState<Booklisting[]>([])
  const [showDeletePopup, setShowDeletePopup] = useState(false)
  const [listingToDelete, setListingToDelete] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        const listings = await fetchListingsByUser(id)
        setBookListings(Array.isArray(listings) ? listings : [])
      }
    }

    fetchData()
  }, [id])

  const handleDeleteClick = (listingId: string) => {
    setListingToDelete(listingId)
    setShowDeletePopup(true)
  }

  const confirmDelete = async () => {
    if (listingToDelete) {
      await deleteListingById(listingToDelete)
      setBookListings(prev => prev.filter(listing => listing._id !== listingToDelete))
      setListingToDelete(null)
      setShowDeletePopup(false)
    }
  }

  const cancelDelete = () => {
    setListingToDelete(null)
    setShowDeletePopup(false)
  }

  return (
    <>
      {showDeletePopup && (
        <DeleteBookListing
          onConfirm={confirmDelete}
          onCancel={cancelDelete}
        />
      )}
      <div className="my-book-wrapper">
        <div className="my-books">
          <div className="my-books-list">
            <ul>
              {bookListings.length > 0 ? (
                bookListings.map((listing) => (
                  <li key={listing._id}>
                    <div className="book-item">
                      <BookListing listing={listing} />
                      <div className="book-actions">
                      <button onClick={() => listing._id && handleDeleteClick(listing._id)} className="delete-button">
  Delete
</button>
                        <Link to={`/edit-listing/${id}/${listing._id}`}>
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