import React, { useEffect, useState } from "react";
import GeneralContext from "./GeneralContext";
// import { useHistory } from 'react-router-dom'

// The general state would hold state objects that
const GeneralState = (props) => {
  // const { push } = useHistory()

  const [generalState, setGeneralState] = useState({
    user: JSON.parse(localStorage.getItem("user")) || null,
    userToken: localStorage.getItem("user-token") || null,
  });

  const [logoutModalOpened, setLogOutModalOpened] = useState(false);

  const [logInmodalOpened, setLogInmodalOpened] = useState(false);

  const logOut = (push) => {
    setGeneralState({});
    localStorage.clear();
    push("/");
    setLogInmodalOpened(true);
    setLogOutModalOpened(false);
  };

  const [paymentModalOpened, setPaymentModalOpened] = useState(false);
  const checkThatUserHasPaid = () => {
    if (!generalState.user?.paid) {
      setPaymentModalOpened(true);
    }
  };

  return (
    <GeneralContext.Provider
      value={{
        generalState,
        setGeneralState,
        paymentModalOpened,
        setPaymentModalOpened,
        logOut,
        checkThatUserHasPaid,
        logoutModalOpened,
        setLogOutModalOpened,
        logInmodalOpened,
        setLogInmodalOpened,
      }}
    >
      {props.children}
    </GeneralContext.Provider>
  );
};

export default GeneralState;
