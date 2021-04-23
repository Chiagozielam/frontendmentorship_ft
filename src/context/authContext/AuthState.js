import React, { useReducer, useEffect } from 'react'
import AuthContext from './AuthContext'
import * as api from '../../constants/baseUri'
import AuthReducer from './AuthReducer'


const baseUri = `${api.BASE_URI}/user`

const AuthState = (props) => {

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


  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isLoading: state.isLoading,
        isSignout: state.isSignout,
        userToken: state.userTOken
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthState
