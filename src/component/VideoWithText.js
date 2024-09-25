import React from "react";
import VideoSection from "./VideoSection";

const VideoWithText = () => {
    return (
        <div>
            {/* Section 1 */}
            <VideoSection
                videoSrc="path-to-your-video1.mp4"
                title="Buy Real 🇮🇳 Indian Likes & Comments [ 34rs -1000 Likes, 3rs - 10 comments]"
                listItems={["Cheapest Indian Likes", "Best Service in the World", "100% Real Indian Likes & comments", "Buy real likes"]}
            />

            {/* Section 2 */}
            <VideoSection
                videoSrc="path-to-your-video2.mp4"
                title="Buy Real 🇮🇳 Instagram Reel Views 2023 - [ 3rs -10,000 ]"
                listItems={["Cheapest Reel Views Services", "Get Viral Today!", "Non-Drop", "Reel Views SMM panel"]}
            />

            {/* Section 3 */}
            <VideoSection
                videoSrc="path-to-your-video3.mp4"
                title="Buy Real Instagram Reel Likes 'Unlimited' [ 1rs -1000 Likes ]"
                listItems={["Cheapest Instagram Likes", "2rs for 1000 likes cheapest in the world", "Real Likes", 
                    "Buy instagram likes 2023", "Buy reel likes"]}
            />

            {/* Section 4 */}
            <VideoSection
                videoSrc="path-to-your-video1.mp4"
                title="Buy Real Instagram Reel Likes 'Unlimited' [ 2rs -1000 Likes ]"
                listItems={["Cheapest Instagram Likes", "2rs for 1000 likes cheapest in the world", "Real Likes", 
                    "Buy instagram likes 2023", "Buy reel likes"]}
            />

            {/* Section 5 */}
            <VideoSection
                videoSrc="path-to-your-video2.mp4"
                title="Buy Real 🇮🇳 Instagram Reach & Share"
                listItems={["Increase Account Reach ", "Real Post/Reel Share", "Account par reach kessa badhaye", 
                    "Real par reach kessa badhaye", "cheapest reach service in the world"]}
            />

            {/* Section 6 */}
            <VideoSection
                videoSrc="path-to-your-video3.mp4"
                title="Buy 🇮🇳 Instagram Followers 'UNLIMITED' - [ 42rs -1000 Non-Drop, 12rs-1000 Cheapest ]"
                listItems={["Non-Drop", "Ultra Fast Speed ", "No Fake ID or Password", "Real Followers will Engage with your content.", 
                    "Buy 100k Followers Daily", "Best Followers SMM Panel", "Instagram Followers SMM Panel"]}
            />
        </div>
    )
}

export default VideoWithText;