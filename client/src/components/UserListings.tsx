

/*

const UserListings = () => {
  const { id } = useParams()
  const [bookListings, setBookListings] = useState<Booklisting[]>([])

  useEffect(() => {
    const fetchBookListings = async () => {
        try {
        const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/bookListings?userId=${id}`);
          console.log("Fetched listings:", response.data)
          setBookListings(Array.isArray(response.data) ? response.data : [])
        } catch (error) {
          console.error("Error fetching book listings:", error)
        }
      }

    if (id) {
      fetchBookListings()
    }
  }, [id])

  return (
    <>
      <h3>
        <Link to={`/create-listing/${id}`}>Create a Listing!</Link>
      </h3>
      <h2>User Listings</h2>
      <ul>
        {bookListings.length > 0 ? (
          bookListings.map((listing) => (
            <li key={listing.id}>
              <BookListing listing={listing} />
            </li>
          ))
        ) : (
          <p>No Book Listings available</p>
        )}
      </ul>
    </>
  )
}

export default UserListings
/*
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const UserListings = () => {
  const { id } = useParams()

  return (
    <>
      <h3>
        <Link to={`/create-listing/${id}`}>Create a Listing!</Link>
      </h3>
      <h2>User Listings</h2>
      <ul>
        <li>
          <h3>List of Book Listings</h3>
        </li>
      </ul>
    </>
  );
}

export default UserListings;

*/


import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, Link, useNavigate } from 'react-router-dom'
import BookListing from './BookListings'
import Booklisting from '../interfaces/Booklisting'

const UserListings = () => {
  const { id } = useParams()
  const [bookListings, setBookListings] = useState<Booklisting[]>([])
  const navigate = useNavigate()

  useEffect(() => {
    const fetchBookListings = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/bookListings?user=${id}`)
        console.log("Fetched listings:", response.data)
        setBookListings(Array.isArray(response.data) ? response.data : [])
      } catch (error) {
        console.error("Error fetching book listings:", error)
      }
    }

    if (id) {
      fetchBookListings()
    }
  }, [id])

  const handleDelete = async (listingId: string) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this listing?")
    if (confirmDelete) {
      try {
        await axios.delete(`${import.meta.env.VITE_API_BASE_URL}/bookListings/${listingId}`)
        setBookListings(prev => prev.filter(listing => listing._id !== listingId))
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
                  <li key={listing._id}>
                    <div className="book-item">
                      <BookListing listing={listing} />
                      <div className="book-actions">
                        <button onClick={() => handleDelete(listing._id!)} className="delete-button">
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
