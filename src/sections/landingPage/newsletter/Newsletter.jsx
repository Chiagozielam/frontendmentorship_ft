import React from "react";
import GeneralButton from "../../../components/GeneralButton";
import HeaderText from "../../../components/headerText/headerText";
import NormalText from "../../../components/normalText/normalText";
import "./styles.scss";

const Newsletter = () => {
  return (
    <div className="newsletter-section">
      <div className="heading-container">
        <HeaderText text="Subscribe To Our News Letter" className="header" />
        <NormalText
          className="sub_text"
          width="485px"
          margin="auto"
          text="Be one of the earliest persons to know about new offers or other free helpful content we will provide in future!"
        />
      </div>
      <div className="input_form_container">
        <input
          className="newsletter-input"
          type="email"
          name="email"
          placeholder="email address"
        />
        <GeneralButton
          buttonText="Subscribe"
          height="70px"
          borderRadius="0px 15px 15px 0px"
          fontSize="16px"
          fontWeight="600"
          className="subscribe_btn"
        />
      </div>
    </div>
  );
};

export default Newsletter;
