import HeaderLoggedIn from "../components/HeaderLoggedIn"
import "../styles/HomeLoggedIn.css"
import bookLogo from "../assets/Book1.svg"

const HomeLoggedIn = () => {
  return (
    <div className="home">
        <HeaderLoggedIn />
        <div className="intro-logged-in">
                <h3>Welcome to Book Loop!</h3>
                <div className="intro">
                    <p>Book Loop is a platform for swapping books and making friends in your neighborhood!</p>
                    <p>List books you'd like to swap, donate or lend...</p>
                    <p>Find other book lovers in your city and check out their collections...</p>
                    <p>Connect with swappers and plan meetups in your community...</p>
                </div>
            </div>

            <div className="home__feature">
            <p className="home__text">Keep books circulating!</p>
            <img src={bookLogo} alt="Book Logo" className="book_logo" />
        </div>

    </div>
  )
}

export default HomeLoggedIn