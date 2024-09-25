import SignupPage from "../component/SignupPage";
import React from "react";
import SignupVideoSection from "../component/signupVideoSection";
import ChatComponent from "../component/ChatComponent";

const Signup = () => {
    return (
        <>
            <SignupPage></SignupPage>
            <SignupVideoSection></SignupVideoSection>
            <ChatComponent></ChatComponent>
        </>
    )
}

export default Signup;