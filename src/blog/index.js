import React from "react";
import SocialMediaBoost from "../component/SocialMediaBoost"
import CardContainer from "../component/CardContainer";

const Blog = () => {
    return (
        <>
        <SocialMediaBoost 
        title="Boost Your Social Media Presence" 
        text="We will help you take your social media presence to another level." 
        titleColor="#0c305b"
        textColor="0c305b"></SocialMediaBoost>
        <CardContainer />
        </>
    )
}

export default Blog;