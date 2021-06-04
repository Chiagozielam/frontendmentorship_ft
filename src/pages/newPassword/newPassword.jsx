import "./styles.scss";
import { Row, Col, Alert, Spin } from "antd";
import NormalInput from "../../components/form/normalInput/normalInput";
import GeneralButton from "../../components/GeneralButton";
import { useState } from "react";
import { BASE_URI } from "../../constants/baseUri";
import axios from "axios";
import { useHistory } from "react-router-dom";

const SetPassword = () => {
  const token = new URLSearchParams(document.location.search.substring(1)).get(
    "token"
  );

  const { push } = useHistory();

  if (!token) {
    push("/login");
  }

  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const [newPassword, setNewPassword] = useState("");
  const [confrimPassword, setConfrimPassword] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const sendNewPassword = async e => {
    e.preventDefault();

    if (newPassword === confrimPassword && newPassword.length >= 6) {
      setIsLoading(true);
      let submitObject = { newPassword };

      let config = {
        method: "post",
        url: `${BASE_URI}/user/changepassword`,
        headers: {
          "user-token": token
        },
        data: submitObject
      };

      try {
        const sendRequest = await axios(config);
        setAlertMessage(sendRequest.data.message);
        setShowAlert(true);
        setIsLoading(false);
        setTimeout(() => {
          push("/login");
        }, 3500);
      } catch (err) {
        console.log(err);
      }
    } else if (newPassword !== confrimPassword) {
      setShowErrorMessage(true);
      setErrorMessage("Passwords do not match");
      setTimeout(() => {
        setShowErrorMessage(false);
      }, 3000);
    } else if (newPassword.length < 6) {
      setShowErrorMessage(true);
      setErrorMessage("Password must be up to 6 characters");
      setTimeout(() => {
        setShowErrorMessage(false);
      }, 3000);
    }
  };
  return (
    <div className="new-password">
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
            <h3>Create New Password</h3>
            <form onSubmit={sendNewPassword}>
              <NormalInput
                label="New Password"
                type="password"
                inputValue={newPassword}
                onChange={event => setNewPassword(event.target.value)}
              />
              {showErrorMessage && (
                <p style={{ color: "red", textAlign: "left" }}>
                  {errorMessage}
                </p>
              )}
              <NormalInput
                label="Confirm Password"
                type="password"
                inputValue={confrimPassword}
                onChange={event => setConfrimPassword(event.target.value)}
              />
              {showErrorMessage && (
                <p style={{ color: "red", textAlign: "left" }}>
                  {errorMessage}
                </p>
              )}
              <div className="submit-btn">
                {isLoading ? (
                  <Spin
                    tip="Creating new password..."
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
                    buttonText="Submit"
                    width="100%"
                    height="54px"
                    borderRadius="10px"
                    htmlType="submit"
                  />
                )}
              </div>
            </form>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default SetPassword;
