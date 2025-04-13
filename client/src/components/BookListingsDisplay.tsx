import { useState, useEffect } from 'react'
import axios from 'axios'
import BookListing from './BookListings'
import Booklisting from '../interfaces/Booklisting'
import { User } from '../interfaces/User'
import { useParams } from 'react-router-dom'

const BookListingsDisplay = () => {
  const { city } = useParams<{ city: string }>()

  const [users, setUsers] = useState<User[]>([])
  const [listingsByUser, setListingsByUser] = useState<Record<string, Booklisting[]>>({})

  useEffect(() => {
    if (!city) return

    const fetchUsersAndListings = async () => {
      try {
        const usersRes = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/user?city=${city}`)
        const usersInCity = usersRes.data
        setUsers(usersInCity)

        const listingsObj: Record<string, Booklisting[]> = {}

        await Promise.all(
          usersInCity.map(async (user: User) => {
            const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/bookListings?user=${user._id}`)
            listingsObj[user._id] = res.data
          })
        )

        setListingsByUser(listingsObj)
      } catch (err) {
        console.error(err)
      }
    }

    fetchUsersAndListings()
  }, [city])

  return (
    <div>
      <h2>Users Listing Books in {city}</h2>
      {users.map((user) => (
        <div key={user._id}>
          <h3>{user.username}</h3>
          <ul>
            {listingsByUser[user._id]?.length > 0 ? (
              listingsByUser[user._id].map((listing) => (
                <li key={listing.userId}>
                  <BookListing listing={listing} />
                </li>
              ))
            ) : (
              <p>No listings from this user</p>
            )}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default BookListingsDisplay

/*
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BookListing from './BookListings';
import Booklisting from '../interfaces/Booklisting';

const BookListingsDisplay = () => {
    const { city } = useParams()
    const [bookListings, setBookListings] = useState<Booklisting[]>([])
  
    useEffect(() => {
      const fetchBookListings = async () => {
          try {
          const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/bookListings?city=${city}`);
            console.log("Fetched listings:", response.data)
            setBookListings(Array.isArray(response.data) ? response.data : [])
          } catch (error) {
            console.error("Error fetching book listings:", error)
          }
        }
  
      if (city) {
        fetchBookListings()
      }
    }, [city])
  
    return (
      <>
        <h2>Browse Books</h2>
        <ul>
          {bookListings.length > 0 ? (
            bookListings.map((listing) => (
              <li key={listing.userId}>
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
  
  export default BookListingsDisplay

/*
const BookListingsDisplay = () => {
  const { city } = useParams<{ city: string }>();  // Get the city from the URL
  const [bookListings, setBookListings] = useState<Booklisting[]>([]);
  const [usernames, setUsernames] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (city) {
      const fetchBookListings = async () => {
        try {
          const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/bookListings?city=${city}`);
          const listings = Array.isArray(response.data) ? response.data : [];

          // Now fetch usernames for each listing
          for (const listing of listings) {
            try {
              const userResponse = await axios.get(
                `${import.meta.env.VITE_API_BASE_URL}/users/${listing.userId}`
              );
              setUsernames(prevState => ({
                ...prevState,
                [listing.userId]: userResponse.data.username,
              }));
            } catch (error) {
              console.error(`Error fetching username for userId ${listing.userId}:`, error);
            }
          }

          setBookListings(listings);
        } catch (error) {
          console.error("Error fetching book listings:", error);
        }
      };

      fetchBookListings();
    }
  }, [city]);  // Refetch when city changes

  return (
    <>
      <h2>Browse Listings in {city}</h2>
      <ul>
        {bookListings.length > 0 ? (
          bookListings.map((listing) => (
            <li key={listing.id}>
              <BookListing listing={listing} />
              <p>Posted by: {usernames[listing.userId]}</p>
            </li>
          ))
        ) : (
          <p>No Book Listings available in this city</p>
        )}
      </ul>
    </>
  );
};

export default BookListingsDisplay;

/*

import BookListing from "./BookListings"
import { useState } from "react";
import Booklisting from "../interfaces/BookListing"

const BookListingsDisplay = ({listings }: { listings: Booklisting[] }) => {
    const [selectedCity, setselectedCity] = useState<string>('')

    const cities = Array.from(new Set(listings.map(listing => listing.city)))

    const filteredListings = selectedCity
        ? listings.filter(listing => listing.city === selectedCity)
        : listings

        return (
            <div>
                <div>
                <label>Filter by City: </label>
                <select value={selectedCity} onChange={(e) => setselectedCity(e.target.value)}>
                    <option value="">All Cities</option>
                    {cities.map(city => (
                        <option key={city} value={city}>{city}</option>
                    ))}
                </select>
            </div>

            <div>
                {filteredListings.map(listings => (
                    <BookListing key={listings.id} listing={listings}/>
                ))}
            </div>
            </div>
        )
}

export default BookListingsDisplay

*/