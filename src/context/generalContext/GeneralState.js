import React, { useEffect, useState } from 'react'
import GeneralContext from './GeneralContext'
// import { useHistory } from 'react-router-dom'

import { LOGIN_PAGE } from "../../routes";




// The general state would hold state objects that
const GeneralState = (props) => {

  
  // const { push } = useHistory()
  
  const [generalState, setGeneralState] = useState({
    user: JSON.parse(localStorage.getItem('user')) || null,
    userToken: localStorage.getItem('user-token') || null,
  })


  const [logoutModalOpened, setLogOutModalOpened] = useState(false)
  const logOut = (push) => {
    setGeneralState({})
    localStorage.clear()
    push(LOGIN_PAGE)
    setLogOutModalOpened(false)
  }

  const [paymentModalOpened, setPaymentModalOpened] = useState(false)
  const checkThatUserHasPaid = () => {
    if(!generalState.user?.paid){
      setPaymentModalOpened(true)
    }
  }
  


  return(
    <GeneralContext.Provider
      value={{
        generalState,
        setGeneralState,
        paymentModalOpened,
        setPaymentModalOpened,
        logOut,
        checkThatUserHasPaid,
        logoutModalOpened,
        setLogOutModalOpened
      }}
    >
      {props.children}
    </GeneralContext.Provider>
  )
}

export default GeneralState
