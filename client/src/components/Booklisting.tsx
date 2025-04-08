import Booklisting from "../interfaces/Booklisting";


function BookListing(props: { listing?: Booklisting }) {
    const { listing } = props;
  
    if (!listing) {
      return <div>No book listing available.</div>;
    }
  
    return (
      <div>
        <h2>{listing.title}</h2>
        <p>Author: {listing.author}</p>
        <p>Genre: {listing.genre}</p>
        <p>City: {listing.city}</p>
        <p>{listing.description}</p>
      </div>
    );
  }
  
  export default BookListing;
  