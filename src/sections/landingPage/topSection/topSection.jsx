import React from "react";
import { useHistory } from "react-router-dom";
import { Row, Col } from "antd";
import Typewriter from "typewriter-effect";
import "./styles.scss";
import GeneralButton from "../../../components/GeneralButton";
import { REGISTRATION_PAGE } from "../../../routes";
import { LazyLoadImage } from "react-lazy-load-image-component";

const TopSection = () => {
  const { push } = useHistory();
  return (
    <div className="entire-top-section">
      <Row className="flex_container">
        <Col sm={24} md={9} lg={9} className="flex-1">
          <h1>
            <img
              className="box_lines"
              src="https://res.cloudinary.com/dmrdnero7/image/upload/v1654028580/frontendMentorship/box_lines_wklt7j.png"
              alt=""
            />
            Kickstart your <br />
            web development <br /> career
          </h1>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  "<p>Transition from any career and join others in learning frontend web development from scratch</p>"
                )
                .start();
            }}
            options={{
              delay: 0.2,
              cursor: " ",
            }}
          />
          <div className="large-screen-button">
            <GeneralButton
              buttonText="Signup for free"
              width="275px"
              height="73px"
              fontSize="20px"
              borderRadius="15px"
              marginTop="61px"
              className="signUp_btn"
              onClick={() => push(REGISTRATION_PAGE)}
            />
          </div>
        </Col>
        <Col sm={24} md={15} lg={15} className="flex-2">
          <img
            alt="a code snippet"
            className="top-image"
            src="https://res.cloudinary.com/dmrdnero7/image/upload/v1654292608/frontendMentorship/top_image_ypapl1.png" // use normal <img> attributes as props
          />

          <img
            className="book_drawing"
            src="https://res.cloudinary.com/dmrdnero7/image/upload/v1654206133/frontendMentorship/book_drawing_mbl1yz.png"
          />
        </Col>
      </Row>
    </div>
  );
};

export default TopSection;
