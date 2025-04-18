import Header from "../components/Header"
import HomeMain from "../components/HomeMain"
import HomeFeature from "../components/HomeFeature"

import "../styles/Home.css"

const Home = () => {
  return (
    <div className="home">
        <Header />
        <HomeMain />
        <HomeFeature />
    </div>
  )
}

export default Home