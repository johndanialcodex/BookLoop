import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <h1>Book Loop</h1>
            <nav>
                <Link to="/create-profile">Create Profile</Link>
            </nav>
        </header>
    )
}

export default Header