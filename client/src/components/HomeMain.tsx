import { Link } from 'react-router-dom'

const HomeMain = () => {
    return (
        <>
        <h2>Main</h2>
                <ul>
                    <li>
                    <Link to="/create-listing">Create a Listing!</Link>
                    </li>
                    <li>
                    <Link to="/browse">Browse Books!</Link>
                    </li>
                </ul>
                </>
    )
}

export default HomeMain