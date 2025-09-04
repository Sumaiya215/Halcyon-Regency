import Banner from "../Banner/Banner"
import Discounts from "../Discounts/Discounts"
import Services from "../Services/Services"
import Welcome from "../Welcome/Welcome"


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Welcome></Welcome>
            <Discounts></Discounts>
            <Services></Services>
        </div>
    )
}

export default Home