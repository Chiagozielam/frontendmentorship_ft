import React from "react";
import { Col, Row } from "antd";
import "./styles.scss";
import GeneralButton from "../../../components/GeneralButton";
import NormalText from "../../../components/normalText/normalText";

import HeaderText from "../../../components/headerText/headerText";

const AboutMe = () => {
  return (
    <div className="about-me-section">
      <div className="sub_container">
        <Row style={{ justifyContent: "space-between" }}>
          <Col sm={24} md={12} lg={11}>
            <div className="body">
              <HeaderText
                text="Hi, I’m Daniel Don,"
                fontSize="32px"
                color="#000000"
                fontWeight="600"
                className="about_me_header"
              />
              <NormalText
                text="The lead insructor in the frontend mentorship program."
                fontWeight="400"
                className="sub_text"
              />
              <NormalText
                text="He has 4+ years of experience building software from a level of an absolute beginner."
                fontWeight="400"
                className="sub_text"
              />
              <NormalText
                text="He has been actively sharing knowledge and helping people have an interesting start to a career in software develpment since 2019."
                fontWeight="400"
                className="sub_text"
              />

              <GeneralButton
                buttonText="View Profile"
                width="239px"
                height="68px"
                borderRadius="15px"
                fontWeight="600"
                fontSize="16px"
                className="view_profile_btn"
              />
            </div>
          </Col>

          <Col sm={24} md={12} lg={12}>
            <img
              className="image"
              src="https://res.cloudinary.com/dmrdnero7/image/upload/v1654171515/frontendMentorship/about_img_lmfptv.png"
              alt=""
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default AboutMe;
