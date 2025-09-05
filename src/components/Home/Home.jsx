import Banner from "../Banner/Banner"
import Discounts from "../Discounts/Discounts"
import Investment from "../Investment/Investment"
import Services from "../Services/Services"
import Welcome from "../Welcome/Welcome"


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Welcome></Welcome>
            <Discounts></Discounts>
            <Services></Services>
            <Investment></Investment>
        </div>
    )
}

export default Home