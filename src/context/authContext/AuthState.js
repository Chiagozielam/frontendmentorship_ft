import React, { useReducer, useEffect, useContext } from "react";
import { useAlert } from "react-alert";
import AuthContext from "./AuthContext";
import GeneralContext from "../generalContext/GeneralContext";
import * as api from "../../constants/baseUri";
import AuthReducer from "./AuthReducer";
import axios from "axios";
import { CONGRATULATION_PAGE, POST_AUTH_ROUTES, PROFILE_PAGE } from "../../routes";


const AuthState = (props) => {

  const { REACT_APP_BASE_URI } = process.env
  const BASE_URI = api.BASE_URI
  const Alert = useAlert()

  const { generalState, setGeneralState } = useContext(GeneralContext);

  const initialState = {
    isLoading: true,
    isSignout: false,
    userToken: localStorage.getItem('user-token') || null,
    user: null,
  } 

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  useEffect(() => {
    getUser();
    console.log(state.userToken);
  }, []);

  const getUser = async () => {
    const savedUser = localStorage.getItem("user");
    const savedUserToken = localStorage.getItem("user-token");

    const parsedUserObject = JSON.parse(savedUser);

    const payload = [parsedUserObject, savedUserToken];

    dispatch({ type: "GET_USER", payload: payload });
  };

  const loginUser = async (submitObject, actions, push) => {
    try{
      const userDataReturned = await axios.post(`${BASE_URI}/user/login`, submitObject)
      const stringifiedUserObject = JSON.stringify(userDataReturned.data.user)
      const token = userDataReturned.data.token

      localStorage.setItem("user", stringifiedUserObject);
      localStorage.setItem("user-token", token);

      // Set the user object and the user-token to the general state
      setGeneralState({ userToken: token, user: userDataReturned.data.user });
      actions.setSubmitting(false);
      // Once everything is done, now we can push to the dashboard
      push(POST_AUTH_ROUTES);
    } catch (err) {
      // Use the 403 http status code check if the user has confirmed their email
      if (err.response?.status == 403) {
        localStorage.setItem("user", JSON.stringify(err.response?.data.user));

        // Set the user object to the general state
        setGeneralState({ ...generalState, user: err.response?.data.user });
        Alert.show("Please confirm your email to login");
        push(CONGRATULATION_PAGE);
      }

      // User the 409 status code to if the email or password is incorrect
      if (err.response?.status == 409) {
        Alert.error("The email or password you entered is incorrect");
      }
      alert(JSON.stringify(err))
      console.log(err.response);
      actions.setSubmitting(false);
      return;
    }
  };

  const registerUser = async (submitObject, actions, push) => {
    console.log(submitObject)
    try{
      const userDataReturned = await axios.post(`${BASE_URI}/user/register`, submitObject)
      console.log(userDataReturned.data)
      const stringifiedUserObject = JSON.stringify(userDataReturned.data.user)

      localStorage.setItem("user", stringifiedUserObject);

      // Set the user object to the general state
      setGeneralState({ ...generalState, user: userDataReturned.data.user });
      actions.setSubmitting(false);
      // Once everything is done, now we can push to the congratulations page
      push(CONGRATULATION_PAGE);
    } catch (err) {
      // Use the 403 http status code check if in input validation failed
      if (err.response?.status == 403) {
        Alert.error(err.response?.data.message);
      }

      // User the 409 status code to if the email already exists
      if (err.response.status == 409) {
        Alert.error(err.response?.data.message);
      }
      console.log(err.response?.data.message);
      actions.setSubmitting(false);
      return;
    }
  };

  const verifyUserEmail = async (token, setState, push) => {
    console.log("The verifyEmail function is being called")
    try{
      const sendRequest = await axios.post(`${BASE_URI}/user/verifyemail?token=${token}`)

      //  Set the state that holds the message to display to the screen in our verifyEmail.jsx component
      setState(sendRequest.data.message);
      console.log("Here is the data: ", sendRequest.data)
      const stringifiedUserObject = JSON.stringify(sendRequest.data.user);
      const returnedToken = sendRequest.data.token;
      // Save the user and the token to localStorage
      localStorage.setItem("user", stringifiedUserObject);
      localStorage.setItem("user-token", returnedToken);

      // Set the user object and the token to our general state
      setGeneralState({
        ...generalState,
        userToken: token,
        user: sendRequest.data.user
      });
      push(POST_AUTH_ROUTES);
    } catch (err) {
      //  Set the state that holds the message to display to the screen in our verifyEmail.jsx component
      setState(err.response?.data.message);
      return;
    }
  };

  const resendVerification = async () => {
    const submitObject = {
      id: generalState.user._id,
      email: generalState.user.email
    };

    try {
      const sendRequest = await axios.post(
        `${BASE_URI}/user/resendemailverification`,
        submitObject
      );
      Alert.info(sendRequest.data.message);
    } catch (err) {
      return Alert.error(err.response.data.message);
    }
  };

  const updateProfileInfo = async(setIsLoading, submitData, push, setShowEditProfileModal) => {
    const userToken = generalState.userToken
    let config = {
      method: 'post',
      url: `${BASE_URI}/user/updateprofiledata`,
      headers: {
          'user-token': userToken,
          'Content-Type': 'multipart/form-data'
      },
      data: submitData
    };

    try {
      const userDataReturned = await axios(config)
      const returnedUserObject = userDataReturned.data.data
      console.log("Here is the returned user object: ", returnedUserObject)
      localStorage.setItem("user", JSON.stringify(returnedUserObject))
      setGeneralState({
        ...generalState,
        user: returnedUserObject
      })
      setIsLoading(false)
      setShowEditProfileModal(false)
    } catch (err) {
      setIsLoading(false)
      alert(err?.response?.data?.message)
      console.log(err)
    }

  }

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isLoading: state.isLoading,
        isSignout: state.isSignout,
        userToken: state.userToken,
        loginUser,
        registerUser,
        verifyUserEmail,
        resendVerification,
        updateProfileInfo,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
