import Title from "./Title";
import Subtitle from "./Subtitle";
import PortFolioProvider from "./PortFolioContext";
import PortFolioSwiper from "./PortFolioSwiper";

const Portfolio = () => {
    return (
            <div className="bg-[#F7F5EB] py-[120px] text-center">
                <Subtitle>Portfolio</Subtitle>
                <Title>We Have Done</Title>
                <PortFolioProvider>
                    <PortFolioSwiper/>
                </PortFolioProvider>
            </div>
    )
}

export default Portfolio;