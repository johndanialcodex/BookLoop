import BookListing from "./BookListings"
import { useState } from "react";
import Booklisting from "../interfaces/Booklisting"

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