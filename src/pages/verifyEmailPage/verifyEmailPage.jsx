import React, { useEffect, useState, useContext } from "react";
import { Spin, Alert } from "antd";
import { useHistory } from "react-router";
import AuthContext from "../../context/authContext/AuthContext";
import GeneralContext from "../../context/generalContext/GeneralContext";
import { POST_AUTH_ROUTES } from "../../routes";

const VerifyEmailPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [pageMessage, setPageMessage] = useState("");

  const { verifyUserEmail } = useContext(AuthContext);
  const { setLogInmodalOpened } = useContext(GeneralContext);

  const token = new URLSearchParams(document.location.search.substring(1)).get(
    "token"
  );
  const { push } = useHistory();

  // With this function below, let's check if the user has a verified email address to determine page redirection
  const checkStatus = () => {
    let user = localStorage.getItem("user");
    user = JSON.parse(user);
    if (!user) {
      setLogInmodalOpened(true);
      return push("/");
    }
    if (user.confirmedEmail) {
      return push(POST_AUTH_ROUTES);
    }
    return;
  };
  useEffect(() => {
    checkStatus();
  }, []);

  const verifyUser = () => {
    verifyUserEmail(token, setPageMessage, push).finally(() => {
      setIsLoading(false);
    });
  };
  useEffect(() => {
    verifyUser();
  }, []);
  return (
    <div>
      {isLoading ? (
        <div style={{ width: "130px", margin: "0 auto", marginTop: "10%" }}>
          <Spin tip="Verifying email..." />
        </div>
      ) : (
        <div>
          <p style={{ textAlign: "center", marginTop: "10%" }}>{pageMessage}</p>
        </div>
      )}
    </div>
  );
};

export default VerifyEmailPage;
