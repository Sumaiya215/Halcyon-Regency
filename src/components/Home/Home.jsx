import About from "../About/About"
import Banner from "../Banner/Banner"
import Discounts from "../Discounts/Discounts"
import Investment from "../Investment/Investment"
import ProjectDetails from "../ProjectDetails/ProjectDetails"
import Services from "../Services/Services"
import Welcome from "../Welcome/Welcome"


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            {/* <Welcome></Welcome> */}
            {/* <Discounts></Discounts> */}
            <About></About>
             <Services></Services>
            <ProjectDetails></ProjectDetails>
            <Investment></Investment>
        </div>
    )
}

export default Home