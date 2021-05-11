import React, { useEffect, useState } from 'react'
import GeneralContext from './GeneralContext'
// import { useHistory } from 'react-router-dom'

import { LOGIN_PAGE } from "../../routes";


// The general state would hold state objects that
const GeneralState = (props) => {

  // const { push } = useHistory()

  const [generalState, setGeneralState] = useState({
    user: null,
    userToken: null,
  })
  const [paymentModalOpened, setPaymentModalOpened] = useState(false)

  const getValuesFromLocalStorage = async() => {
    const user = await JSON.parse(localStorage.getItem("user"))
    const userToken = localStorage.getItem("user-token")

    // Set the values gotten to the state
    setGeneralState({user: user, userToken: userToken})
    if(!user?.paid){
      setPaymentModalOpened(true)
    }
  }

  const logOut = (push) => {
    setGeneralState({})
    localStorage.clear()
    push(LOGIN_PAGE)
  }

  useEffect(() => {
    getValuesFromLocalStorage()
  }, [])

  return(
    <GeneralContext.Provider
      value={{
        generalState,
        setGeneralState,
        paymentModalOpened,
        setPaymentModalOpened,
        logOut
      }}
    >
      {props.children}
    </GeneralContext.Provider>
  )
}

export default GeneralState
