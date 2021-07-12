import React from "react";
import Image from "./images/300.jpg";
import User from "./images/user.jpg";
import Heart from "./images/heart-solid.svg";
import Share from "./images/share-solid.svg";
import Retweet from "./images/retweet-solid.svg";
import "./sass/app.scss";

const SassSocialCard = () => (
  <div className="social_card">
    <img src={Image} alt="Sample" />
    <div className="social_card_body">
      <div>
        <p>
          @sass_scss_pankaj
          <br />
          <span>July 9</span>
        </p>
        <img src={User} alt="@some_lego_guy" />
      
      </div>
      <p>Here is a custom status with some text and stuff...</p>
      <div className="social_interactions">
        <p>
          <img src={Share} alt="Shares" /> 12
        </p>
        <p>
          <img src={Retweet} alt="Retweets" /> 444
        </p>
        <p>
          <img src={Heart} alt="Likes" /> 123
        </p>
      </div>
    </div>
  </div>
);
export default SassSocialCard;
