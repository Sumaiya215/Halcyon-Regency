import Banner from "../Banner/Banner"
import Discounts from "../Discounts/Discounts"
import Welcome from "../Welcome/Welcome"


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Welcome></Welcome>
            <Discounts></Discounts>
        </div>
    )
}

export default Home