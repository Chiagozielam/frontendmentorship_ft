import "./styles.scss";
import { Row, Col, Alert, Spin } from "antd";
import NormalInput from "../../components/form/normalInput/normalInput";
import axios from "axios";
import GeneralButton from "../../components/GeneralButton";
import { REGISTRATION_PAGE } from "../../routes";
import { Link } from "react-router-dom";
import { useState } from "react";
import { BASE_URI } from "../../constants/baseUri";

const ForgetPAssword = () => {
  const [userEmail, setUserEmail] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const resetPassword = async e => {
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
        <Col sm={24} lg={9}>
          <div className="image-container"></div>
        </Col>
        <Col sm={24} lg={15}>
          <div className="form-container">
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
            <h3>Forgot Password?</h3>
            <form onSubmit={resetPassword}>
              <NormalInput
                label="Email address"
                iconName="mail"
                type="email"
                name="email"
                inputValue={userEmail}
                onChange={e => setUserEmail(e.target.value)}
              />
              {showErrorMessage && (
                <p style={{ color: "red", textAlign: "left" }}>
                  Please enter your registerd email
                </p>
              )}
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
                      padding: "5%"
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
            <p className="create-account">
              Don&rsquo;t have an account yet?{" "}
              <Link to={REGISTRATION_PAGE}>Create a free acount here</Link>
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ForgetPAssword;
