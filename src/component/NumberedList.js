import React from "react";
import "./NumberedList.css"; // Add this for custom styles

const NumberedList = () => {
  const listItems = ["We Give the best SMM Panel Services", "We have dedicated very well experienced staff to give what exactly the client is looking for."
    , "We always appear on Google's top results for all keywords related to SMM services.",
    "Cheapsmmglobal  is a very well-established brand, And we want to make your online business presence well establish too.",
    "Our services are real and extremely high quality And come from the authentic promotions.",
    "We always offer a split option for any package you purchase for likes or even views. We are always here to give you the maximum that we can do.",
    "Targeted Lead Generation: We can provide you with targeted lead generation, Followers, and Likes. You can choose your targeting by hashtags, Country, and much more.",
    "We are on aim to provide you, High-class SMM services at extremely low cost. Our packages start from less than ₹1"];

  return (
    <div className="numbered-list-container">
      <h1 className="heading">Key features</h1>
      <ul className="list">
        {listItems.map((item, index) => (
          <li key={index} className="list-item">
            {index + 1}. {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NumberedList;
