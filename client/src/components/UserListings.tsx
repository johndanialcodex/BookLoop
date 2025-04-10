import { Link } from 'react-router-dom'

const UserListings = () => {
    return (
        <>
        <h3><Link to="/create-listing">Create a Listing!</Link></h3>
        <h2>User Listings</h2>
                <ul>
                    <li>
                        <h3>List of Book Listings</h3>
                    </li>
                </ul>
                </>
    )
}

export default UserListings