import React, { useReducer, useEffect, useContext, useState } from 'react'
import { useAlert } from 'react-alert'
import CourseContext from './CourseContext'
import GeneralContext from '../generalContext/GeneralContext'
import * as api from '../../constants/baseUri'
import CourseReducer from './CourseReudcer'
import axios from 'axios'
import { CONGRATULATION_PAGE, POST_AUTH_ROUTES } from '../../routes';


// const AWS_DB_VARIABLE = "http://18.221.186.251:5000/api/v1/user/login"

const CourseState = (props) => {

  const { REACT_APP_BASE_URI } = process.env
  const BASE_URI = "http://18.221.186.251:5000/api/v1/lessons"
  const alert = useAlert()

  const { generalState, setGeneralState } = useContext(GeneralContext)

  const initialState = {
    userLessonFolders: null,
    isLoading: true
  }

  // const [isLoading, setIsLoading] = useState(false)

  const [state, dispatch] = useReducer(CourseReducer, initialState)

  const getAllUserLessonFolders = async() => {
    try{
      // setIsLoading(true)
      const userLessonFolders = await axios.get(`${BASE_URI}/fetchuserlessonfolders`, {
        headers: {
          "user-token": localStorage.getItem("user-token")
        }
      })
      console.log(userLessonFolders.data.data)
      dispatch({ type: "GET_USER_LESSON_FOLDERS", payload: userLessonFolders.data.data})
      // setIsLoading(false)
    }catch(error){
      console.log(error)
    }
  }

  const getUserLessonsForALessonFolder = async (folderId) => {
    const sendObject = {folderId}
    const token = localStorage.getItem("user-token")
    try{
      const folderLessons = await axios.post(`${BASE_URI}/fetchuserfolderlessons`, sendObject, {
        headers: {
          "user-token": token
        }
      })
      return folderLessons.data.data
    }catch(error){
      return console.log(error.response.data)
    }
  }

  const initializePayment = async (Redirect) => {
    const token = localStorage.getItem("user-token")
    const config = {
      headers: {
        "user-token": token
      }
    }
    try{
      const returnedData = await axios.get(`http://18.221.186.251:5000/api/v1/payment/initializetransaction`, config )
      return window.location = returnedData.data.data.authorization_url
      // console.log(returnedData.data)
    }catch(error){
      return console.log(error)
    }
  }

  const verifyPayment = async(txref, reference, push) => {
    console.log("I've entered this function")
    const userId = JSON.parse(localStorage.getItem("user"))._id
    const token = localStorage.getItem("user-token")
    const sendObject = {
      reference,
      txref,
      userId
    }
    console.log(sendObject)
    try{
      const returnedData = await axios.post(`http://localhost:5000/api/v1/payment/verifytransaction`, sendObject, {
        headers: {
          "user-token": token
        }
      })
      console.log(returnedData.data)
      localStorage.setItem("user", JSON.stringify(returnedData.data.data))
      setGeneralState({
        user: returnedData.data.user,
        userToken: returnedData.data.token
      })
      push(POST_AUTH_ROUTES)
    }catch(error){
      console.log("Hello from the catch block")
    }
  }

  return (
    <CourseContext.Provider
      value={{
        userLessonFolders: state.userLessonFolders,
        getAllUserLessonFolders,
        getUserLessonsForALessonFolder,
        isLoading: state.isLoaading,
        initializePayment,
        verifyPayment,
      }}
    >
      {props.children}
    </CourseContext.Provider>
  )
}

export default CourseState
