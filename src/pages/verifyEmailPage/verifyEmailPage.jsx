import React, { useEffect, useState, useContext } from 'react'
import {Spin, Alert} from 'antd'
import { useHistory } from 'react-router'
import AuthContext from '../../context/authContext/AuthContext'
import { LOGIN_PAGE, POST_AUTH_ROUTES } from '../../routes'


const VerifyEmailPage = () => {
  const [loading, setLoading] = useState(true)
  const [pageMessage, setPageMessage] = useState("")

  const { verifyUserEmail } = useContext(AuthContext)

  const token = new URLSearchParams(document.location.search.substring(1)).get("token")
  const { push } = useHistory()

  // With this function below, let's check if the user has a verified email address to determine page redirection
  const checkStatus = () => {
    let user = localStorage.getItem("user")
    user = JSON.parse(user)
    if(!user){
      return push(LOGIN_PAGE)
    }
    if(user.confirmedEmail){
      return push(POST_AUTH_ROUTES)
    }
    return
  }
  useEffect(() => {
    checkStatus()
  }, [])


  const verifyUser = () => {
    verifyUserEmail(token, setPageMessage, push )
  }
  useEffect(() => {
    verifyUser()
    console.log(token)
    setLoading(false)
  }, [])
  return (
    <div>
      {
        loading ? (
          <div style={{ width: "70px", margin: "0 auto", marginTop: "10%"}}>
            <Spin tip="Loading..." />
          </div>
        ) : (
          <div>
            <p style={{ textAlign: "center", marginTop: "10%"}}>{pageMessage}</p>
          </div>
        )
      }
    </div>
  )
}

export default VerifyEmailPage
