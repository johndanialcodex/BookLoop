// import { Link } from 'react-router-dom' (UNCOMMENT WHEN LINKING TO PROFILE PAGE)

const Header = () => {
    return (
        <header>
            <h1>Book Loop</h1>
            <nav>
                <ul>
                    <li>
                        <div>Link to User Profile (If not logged in, link to login form!)</div>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header