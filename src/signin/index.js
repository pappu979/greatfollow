import SmmPanelPage from "../component/SmmPanelPage";
import Guide from "../component/Guide";
import VideoWithText from "../component/VideoWithText";
import ChatWith from "../component/ChatWith";
import TotalSmmCard from "../component/TotalSmmCard";
import ImageOverlay from "../component/ImageOverlay";
import TestimonialSlider from "../component/TestimonialCardSlider";
import StepsToFollow from "../component/StepsToFollow";
import AutoScroll from "../component/autoScroll";
import FaxSession from "../component/faxSession";
import VideoHighlight from "../component/VideoHighlight";
import Footer from "../component/Footer";

const SignIn = () => {
    return(
        <>
        <SmmPanelPage></SmmPanelPage>
        <Guide></Guide>
        <VideoWithText></VideoWithText>
        <ChatWith></ChatWith>
        <TotalSmmCard></TotalSmmCard>
        <ImageOverlay></ImageOverlay>
        <TestimonialSlider></TestimonialSlider>
        <StepsToFollow></StepsToFollow>
        <AutoScroll></AutoScroll>
        <FaxSession></FaxSession>
        <VideoHighlight></VideoHighlight>
        <Footer></Footer>
        </>
    )
}

export default SignIn;