import React from 'react'
import Booklisting from '../interfaces/BookListing'

interface BookListingProps {
  listing: Booklisting
}

const BookListing: React.FC<BookListingProps> = ({ listing }) => {
  return (
    <div className="book-listing">
      <h4><strong>Title:</strong> {listing.title}</h4>
      <p><strong>Author:</strong> {listing.author}</p>
      <p><strong>Genre:</strong> {listing.genre}</p>
      <p><strong>Description:</strong> {listing.description}</p>
    </div>
  )
}

export default BookListing