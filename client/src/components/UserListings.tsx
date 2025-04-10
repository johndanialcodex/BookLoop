import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import BookListing from './BookListings'
import Booklisting from '../interfaces/BookListing'
import { Link } from 'react-router-dom'

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