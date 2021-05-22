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
  const [paymentModalOpened, setPaymentModalOpened] = useState(false)

  const checkThatUserHasPaid = () => {
    if(!generalState.user?.paid){
      setPaymentModalOpened(true)
    }
  }
  
  const logOut = (push) => {
    setGeneralState({})
    localStorage.clear()
    push(LOGIN_PAGE)
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
      }}
    >
      {props.children}
    </GeneralContext.Provider>
  )
}

export default GeneralState
