import "./styles.scss";
import { Row, Col, Alert, Spin } from "antd";
import NormalInput from "../../components/form/normalInput/normalInput";
import axios from "axios";
import GeneralButton from "../../components/GeneralButton";
import { REGISTRATION_PAGE } from "../../routes";
import { Link } from "react-router-dom";
import { useState } from "react";
import { BASE_URI } from "../../constants/baseUri";
import HeaderText from "../../components/headerText/headerText";
import NormalText from "../../components/normalText/normalText";
import { MailOutlined } from "@ant-design/icons";

const ForgetPAssword = () => {
  const [userEmail, setUserEmail] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const resetPassword = async (e) => {
    e.preventDefault();
    if (userEmail) {
      setIsLoading(true);
      setShowErrorMessage(false);
      let submitObject = { email: userEmail };
      try {
        const sendRequest = await axios.post(
          `${BASE_URI}/user/resetpassword`,
          submitObject
        );
        setAlertMessage(sendRequest.data.message);
        setIsLoading(false);
        setShowAlert(true);
      } catch (err) {
        console.log(err);
      }
    } else {
      setShowErrorMessage(true);
    }
  };

  return (
    <div className="forget-password">
      <Row>
        <Col sm={24} md={11}>
          <div className="image-container">
            <div className="sub_container">
              <div className="text_container">
                <HeaderText text="Welcome!" className="welcome_header" />
                <NormalText
                  className="sub_text"
                  text="Mi libero neque consectetur amet mi neque cursus. Dignissim facilisi vitae consequat facilisis bibendum ultrices."
                />
              </div>
            </div>
          </div>
        </Col>
        <Col sm={24} md={13}>
          <div className="form-container">
            <div className="form_sub_container">
              {showAlert && (
                <div className="form-alert">
                  <Alert
                    message={alertMessage}
                    type="success"
                    closable
                    onClose={() => setShowAlert(false)}
                  />
                </div>
              )}
              <HeaderText text="Forgot Password?" className="form_header" />
              <form onSubmit={resetPassword}>
                <div className="each_input_fild">
                  <div className="input_field_container">
                    <MailOutlined className="icon" />
                    <NormalInput
                      label="Email address"
                      iconName="mail"
                      type="email"
                      name="email"
                      placeholder="Input Email"
                      inputValue={userEmail}
                      onChange={(e) => setUserEmail(e.target.value)}
                    />

                    {showErrorMessage && (
                      <p style={{ color: "red", textAlign: "left" }}>
                        Please enter your registerd email
                      </p>
                    )}
                  </div>
                </div>
                <div className="submit-btn">
                  {isLoading ? (
                    <Spin
                      tip="Sending recovery link..."
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: "-5%",
                        marginBottom: "10%",
                        padding: "5%",
                      }}
                    />
                  ) : (
                    <GeneralButton
                      buttonText="Reset Password"
                      width="100%"
                      height="54px"
                      borderRadius="10px"
                      htmlType="submit"
                    />
                  )}
                </div>
              </form>
              <p className="create_account">
                Don&rsquo;t have an account yet?{" "}
                <Link to={REGISTRATION_PAGE}>Create a free acount here</Link>
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ForgetPAssword;
