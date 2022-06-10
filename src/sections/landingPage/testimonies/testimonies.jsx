import React, { useState } from "react";
import NormalText from "../../../components/normalText/normalText";
import HeaderText from "../../../components/headerText/headerText";
import { testimonies } from "./data";
import "./style.scss";

const Testimonies = () => {
  return (
    <div className="testimonies_container">
      <HeaderText
        text="What People Say About Us"
        className="testimoney_header"
      />
      <div className="testimonies">
        <div className="sub_container">
          {testimonies.map((testimoney) => {
            const { img, rating, name, date, text } = testimoney;
            return (
              <div className="each_testimoney">
                <div className="profile">
                  <img src={img} alt={name} className="profile_image" />
                  <div className="profile_details">
                    <NormalText
                      text={name}
                      fontSize="16px"
                      fontWeight="600"
                      color="#061088"
                    />
                    <NormalText text={date} lineHeight="0px" />
                    <img src={rating} alt="stars" />
                  </div>
                </div>
                <NormalText text={text} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Testimonies;
