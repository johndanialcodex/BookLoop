import "../styles/HomeFeature.css"
import bookLogo from "../assets/Book1.png"

const HomeFeature = () => {
    return (
        <div className="home__feature">
            <p className="home__text">Keep books circulating!</p>
            <img src={bookLogo} alt="Book Logo" className="book_logo" />
        </div>
    )
}

export default HomeFeature