import { TextSampleOne, TextSampleTwo } from "./TextForBody"
import Footer from "./Footer";

const RestaurantInformation = () => {

    return (
        <div className="h-96">
            <TextSampleOne></TextSampleOne>
            <TextSampleTwo></TextSampleTwo>
            <div className="ml-[-5%]">
            <Footer></Footer>
            </div>
        </div>
    )

}

export default RestaurantInformation;