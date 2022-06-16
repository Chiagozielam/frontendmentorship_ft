import React, { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import GeneralButton from "../../components/GeneralButton";
import { LESSON_FOLDER_PAGE } from "../../routes";
import AuthContext from "../../context/authContext/AuthContext";
import GeneralContext from "../../context/generalContext/GeneralContext";
import "./styles.scss";

// import { Row, Col, } from 'antd'
const CongratulationsPage = () => {
  const { push } = useHistory();

  const { resendVerification } = useContext(AuthContext);
  const { setLogInmodalOpened } = useContext(GeneralContext);

  const checkStatus = () => {
    const user = localStorage.getItem("user");
    const userToken = localStorage.getItem("user-token");
    if (user && userToken) {
      push(LESSON_FOLDER_PAGE);
    }
    if (!user) {
      push("/");
      setLogInmodalOpened(true);
    }
    if (user && !userToken) {
      return;
    }
    return;
  };
  useEffect(() => {
    checkStatus();
  }, []);
  return (
    <div className="congratulations-container">
      <img
        src="https://res.cloudinary.com/dcft8yhab/image/upload/v1573180878/iqcyjer6umg7umcpb1ok.gif"
        alt="A cartoon raising hands"
      />
      <h2>Congratulations...</h2>
      <p className="description-text">
        Your registration is complete. Now head on to your email and click on
        the email confirmation link sent to your mail and get access to your
        dashboard!
      </p>
      <p>you can close this page now.</p>
      <GeneralButton
        buttonText="Resend Email"
        borderRadius="10px"
        fontSize="18px"
        width="295px"
        height="54.84px"
        onClick={resendVerification}
      />
    </div>
  );
};

export default CongratulationsPage;
