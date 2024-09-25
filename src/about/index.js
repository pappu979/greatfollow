import ChooseUs from "../component/ChooseUs";
import ImageWithText from "../component/ImageWithText";
import NumberedList from "../component/NumberedList";
import ResponsiveText from "../component/ResponsiveText";
import SideBySideText from "../component/SideBySideText";
import SocialMediaBoost from "../component/SocialMediaBoost";
import React from "react";
import TextSection from "../component/TextSection";

const About = () => {
    return(
        <>
        <SocialMediaBoost 
        title="Best SMM Panel Of India" 
        text="Cheapsmmglobal is the cheapest and best smm panel of india."
        titleColor="#4da872"
        textColor="#274bc4"></SocialMediaBoost>
        <ResponsiveText></ResponsiveText>
        <SideBySideText></SideBySideText>
        <ImageWithText></ImageWithText>
        <ChooseUs></ChooseUs>
        <NumberedList></NumberedList>
        <TextSection></TextSection>
      </>
    )
}

export default About;