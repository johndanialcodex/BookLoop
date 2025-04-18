import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import BookListing from './BookListings'
import Booklisting from '../interfaces/Booklisting'
import { User } from '../interfaces/User'
import MessageModal from './MessageModal'
import MessageButton from './MessageButton'

import { fetchUsersByCity } from '../services/postUserService'
import { fetchListingsByUser } from '../services/listingService'

const BookListingsDisplay = () => {
  const { city, id } = useParams<{ city: string; id: string }>()

  const [users, setUsers] = useState<User[]>([])
  const [listingsByUser, setListingsByUser] = useState<Record<string, Booklisting[]>>({})
  const [selectedReceiverId, setSelectedReceiverId] = useState<string | null>(null)
  const [selectedBookTitle, setSelectedBookTitle] = useState<string | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    if (!city) return

    const fetchUsersAndListings = async () => {
      try {
        const usersInCity = await fetchUsersByCity(city)
        setUsers(usersInCity)

        const listingsObj: Record<string, Booklisting[]> = {}

        await Promise.all(
          usersInCity.map(async (user: User) => {
            const listings = await fetchListingsByUser(user._id)
            listingsObj[user._id] = listings
          })
        )

        setListingsByUser(listingsObj)
      } catch (err) {
        console.error(err)
      }
    }

    fetchUsersAndListings()
  }, [city])

  const handleMessageClick = (receiverId: string, bookTitle: string) => {
    setSelectedReceiverId(receiverId)
    setSelectedBookTitle(bookTitle)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedReceiverId(null)
  }

  return (
    <div>
      <h2>Swappers Available in {city}</h2>
      <div>
        <Link to={`/profile/${id}`}>Back to Profile</Link>
      </div>

      {users.map((user) => (
        <div className="swapper-card" key={user._id}>
          <h3>
            Swapper:{' '}
            <span className="swapper-link"><Link to={`/swapper/${user._id}?myId=${id}`}>{user.username}</Link></span>
          </h3>
          <ul>
            {listingsByUser[user._id]?.length > 0 ? (
              listingsByUser[user._id].map((listing) => (
                <li key={listing.userId}>
                  <div className="listing-card">
                    <BookListing listing={listing} />
                    <MessageButton
                      receiverId={user._id}
                      onClick={() => handleMessageClick(user._id, listing.title)}
                    />
                  </div>
                </li>
              ))
            ) : (
              <p>No listings from this user</p>
            )}
          </ul>
        </div>
      ))}

      {isModalOpen && selectedReceiverId && (
        <MessageModal
          senderId={id}
          receiverId={selectedReceiverId}
          bookTitle={selectedBookTitle ?? ''}
          onClose={closeModal}
        />
      )}
    </div>
  )
}

export default BookListingsDisplay