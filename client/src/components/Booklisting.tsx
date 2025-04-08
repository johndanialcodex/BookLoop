import { useState } from "react";
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
  
  const BookListingForm = () => {
    const [form, setForm] = useState({
      title: '',
      author: '',
      genre: '',
      description: '',
      city: ''
    });
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm({
        ...form,
        [e.target.name]: e.target.value
      });
    };
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      console.log("Book Listing Submitted:", form);
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title: <input name="title" value={form.title} onChange={handleChange} /></label>
        </div>
        <div>
          <label>Author: <input name="author" value={form.author} onChange={handleChange} /></label>
        </div>
        <div>
          <label>Genre: <input name="genre" value={form.genre} onChange={handleChange} /></label>
        </div>
        <div>
          <label>Description: <textarea name="description" value={form.description} onChange={handleChange} /></label>
        </div>
        <div>
          <label>City: <input name="city" value={form.city} onChange={handleChange} /></label>
        </div>
        <button type="submit">Create Listing</button>
      </form>
    );
  };
  
  export default BookListing;
  export { BookListingForm };
  

  
  