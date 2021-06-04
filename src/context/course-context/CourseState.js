import React, { useReducer, useEffect, useContext, useState } from "react";
import { useAlert } from "react-alert";
import CourseContext from "./CourseContext";
import GeneralContext from "../generalContext/GeneralContext";
import * as api from "../../constants/baseUri";
import CourseReducer from "./CourseReudcer";
import axios from "axios";
import {
  CONGRATULATION_PAGE,
  LESSON_FOLDER_PAGE,
  POST_AUTH_ROUTES
} from "../../routes";
import { Alert } from "antd";

// const AWS_DB_VARIABLE = "http://18.221.186.251:5000/api/v1/user/login"

const CourseState = props => {
  const { REACT_APP_BASE_URI } = process.env;
  const BASE_URI = api.BASE_URI;
  const alert = useAlert();

  const { generalState, setGeneralState } = useContext(GeneralContext);

  const initialState = {
    userLessonFolders: null,
    isLoading: true
  };

  // const [isLoading, setIsLoading] = useState(false)

  const [state, dispatch] = useReducer(CourseReducer, initialState);

  const getAllUserLessonFolders = async () => {
    try {
      // setIsLoading(true)
      const userLessonFolders = await axios.get(
        `${BASE_URI}/lessons/fetchuserlessonfolders`,
        {
          headers: {
            "user-token": localStorage.getItem("user-token")
          }
        }
      );
      console.log(userLessonFolders.data.data);
      dispatch({
        type: "GET_USER_LESSON_FOLDERS",
        payload: userLessonFolders.data.data
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getUserLessonsForALessonFolder = async folderId => {
    const sendObject = { folderId };
    const token = localStorage.getItem("user-token");
    try {
      const folderLessons = await axios.post(
        `${BASE_URI}/lessons/fetchuserfolderlessons`,
        sendObject,
        {
          headers: {
            "user-token": token
          }
        }
      );
      return folderLessons.data.data;
    } catch (error) {
      return console.log(error.response.data);
    }
  };

  const initializePayment = async Redirect => {
    const token = localStorage.getItem("user-token");
    const config = {
      headers: {
        "user-token": token
      }
    };
    try {
      const returnedData = await axios.get(
        `${BASE_URI}/payment/initializetransaction`,
        config
      );
      return (window.location = returnedData.data.data.authorization_url);
      // console.log(returnedData.data)
    } catch (error) {
      return console.log(error);
    }
  };

  const verifyPayment = async (txref, reference, push) => {
    console.log("I've entered this function");
    const userId = JSON.parse(localStorage.getItem("user"))._id;
    const token = localStorage.getItem("user-token");
    const sendObject = {
      reference,
      txref,
      userId
    };
    console.log(sendObject);
    try {
      const returnedData = await axios.post(
        `${BASE_URI}/payment/verifytransaction`,
        sendObject,
        {
          headers: {
            "user-token": token
          }
        }
      );
      console.log(returnedData.data);
      localStorage.setItem("user", JSON.stringify(returnedData.data.data));
      setGeneralState({
        ...generalState,
        user: returnedData.data.data
      });
      push(POST_AUTH_ROUTES);
    } catch (error) {
      console.log("Hello from the catch block");
    }
  };

  // THIS SECTION IS FOR THE BONUSES ENDPOINTS

  const getAllTheBonuses = async () => {
    try {
      const allBonuses = await axios.get(
        `${BASE_URI}/bonus/getallbonuscrashcourses`,
        {
          headers: {
            "user-token": generalState.userToken
          }
        }
      );
      return allBonuses.data;
    } catch (error) {
      console.log("here is the error for fetching the bonuses: ", error);
    }
  };
  const getAllThePodcasts = async () => {
    try {
      const allPodcastEpidodes = await axios.get(
        `${BASE_URI}/podcast/getallpodcastepisodes`,
        {
          headers: {
            "user-token": generalState.userToken
          }
        }
      );
      return allPodcastEpidodes.data;
    } catch (error) {
      console.log("here is the error for fetching the bonuses: ", error);
    }
  };

  const unlockTheNextChapter = async (previousFolderIndex, push) => {
    try {
      await axios.post(
        `${BASE_URI}/lessons/unlocknextlessonfolder`,
        { previousFolderIndex: previousFolderIndex },
        {
          headers: {
            "user-token": generalState.userToken
          }
        }
      );
      return push(POST_AUTH_ROUTES);
    } catch (error) {
      console.log("Here is the error unlocking the next chapter: ", error);
      return;
    }
  };

  const markLessonAsCompleted = async submitObject => {
    const userToken = generalState.userToken;
    let config = {
      method: "post",
      url: `${BASE_URI}/lessons/markalessonascomplete`,
      headers: {
        "user-token": userToken
      },
      data: submitObject
    };

    try {
      const userDataReturned = await axios(config);
      return userDataReturned.data.data;
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <CourseContext.Provider
      value={{
        userLessonFolders: state.userLessonFolders,
        getAllUserLessonFolders,
        getUserLessonsForALessonFolder,
        isLoading: state.isLoaading,
        initializePayment,
        verifyPayment,
        getAllTheBonuses,
        getAllThePodcasts,
        unlockTheNextChapter,
        markLessonAsCompleted
      }}
    >
      {props.children}
    </CourseContext.Provider>
  );
};

export default CourseState;
