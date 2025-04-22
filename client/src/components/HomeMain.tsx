import { Link } from 'react-router-dom'
import "../styles/HomeMain.css"

const HomeMain = () => {
    return (
        <>
            <div className="intro-box">
                <h3>Welcome to Book Loop!</h3>
                <div className="intro">
                    <p>Book Loop is a platform for swapping books and making friends in your neighborhood!</p>
                    <p>List books you'd like to swap, donate or lend...</p>
                    <p>Find other book lovers in your city and check out their collections...</p>
                    <p>Connect with swappers and plan meetups in your community...</p>
                </div>
            </div>

            <div className="get-started-section">
    <h3>Get Started</h3>
    <div className="home__main-links">
        <div className="create-profile-link">
            <Link to="/create-profile">Create an Account</Link>
            </div>
    </div>
</div>
        </>
    )
}

export default HomeMain