import React, { useReducer, useEffect, useContext } from 'react'
import { useAlert } from 'react-alert'
import AuthContext from './AuthContext'
import GeneralContext from '../generalContext/GeneralContext'
import * as api from '../../constants/baseUri'
import AuthReducer from './AuthReducer'
import axios from 'axios'
import { CONGRATULATION_PAGE, LESSON_FOLDER_PAGE } from '../../routes';


const AuthState = (props) => {

  const { REACT_APP_BASE_URI } = process.env
  const alert = useAlert()

  const { generalState, setGeneralState } = useContext(GeneralContext)

  const initialState = {
    isLoading: true,
    isSignout: false,
    userToken: null,
    user: null,
  } 

  const [state, dispatch] = useReducer(AuthReducer, initialState)

  useEffect(() => {
    getUser()
    console.log(state.userToken)
  }, [])

  const getUser = async() => {
    const savedUser = localStorage.getItem('user')
    const savedUserToken = localStorage.getItem('user-token')

    const parsedUserObject = JSON.parse(savedUser)
    
    const payload = [
      parsedUserObject,
      savedUserToken,
    ]

    dispatch({type: 'GET_USER', payload: payload})
  }


  const loginUser = async (submitObject, actions, push) => {
    console.log(submitObject)
    try{
      const userDataReturned = await axios.post("http://18.221.186.251:5000/api/v1/user/login", submitObject)
      const stringifiedUserObject = JSON.stringify(userDataReturned.data.user)
      const token = userDataReturned.data.token

      localStorage.setItem("user", stringifiedUserObject)
      localStorage.setItem("user-token", token )

      // Set the user object and the user-token to the general state
      setGeneralState({userToken: token, user: userDataReturned.data.user})
      actions.setSubmitting(false)
      // Once everything is done, now we can push to the dashboard
      push(LESSON_FOLDER_PAGE)
    }catch(err){
      // Use the 403 http status code check if the user has confirmed their email
      if(err.response.status == 403){
        localStorage.setItem("user", JSON.stringify(err.response.data.user))

        // Set the user object to the general state
        setGeneralState({...generalState, user: err.response.data.user})
        alert.show("Please confirm your email to login")
        push(CONGRATULATION_PAGE)
      }

      // User the 409 status code to if the email or password is incorrect
      if(err.response.status == 409){
        alert.error("The email or password you entered is incorrect")
      }
      console.log(err.response.data.message)
      actions.setSubmitting(false)
      return
    }
  }


  const registerUser = async (submitObject, actions, push) => {
    console.log(submitObject)
    try{
      const userDataReturned = await axios.post("http://18.221.186.251:5000/api/v1/user/register", submitObject)
      console.log(userDataReturned.data)
      const stringifiedUserObject = JSON.stringify(userDataReturned.data.user)

      localStorage.setItem("user", stringifiedUserObject)

      // Set the user object to the general state
      setGeneralState({...generalState, user: userDataReturned.data.user})
      actions.setSubmitting(false)
      // Once everything is done, now we can push to the congratulations page
      push(CONGRATULATION_PAGE)
    }catch(err){
      // Use the 403 http status code check if in input validation failed
      if(err.response.status == 403){
        alert.error(err.response.data.message)
      }

      // User the 409 status code to if the email already exists
      if(err.response.status == 409){
        alert.error(err.response.data.message)
      }
      console.log(err.response.data.message)
      actions.setSubmitting(false)
      return
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
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthState
