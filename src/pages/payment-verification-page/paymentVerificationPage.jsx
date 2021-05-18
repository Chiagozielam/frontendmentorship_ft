import React, { useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { Spin } from 'antd'
import CourseContext from "../../context/course-context/CourseContext"
import GeneralContext from "../../context/generalContext/GeneralContext"
import { LOGIN_PAGE, POST_AUTH_ROUTES } from '../../routes'

const PaymentVerificationPage = () => {
  const { verifyPayment } = useContext(CourseContext)
  const { generalState: {user} } = useContext(GeneralContext)

  const trxref = new URLSearchParams(document.location.search.substring(1)).get("trxref")
  const reference = new URLSearchParams(document.location.search.substring(1)).get("reference")
  const { push } = useHistory()


  const checkStatus = () => {
    if(!user){
      return push(LOGIN_PAGE)
    }
    if(user.paid){
      return push(POST_AUTH_ROUTES)
    }
    return
  }

  useEffect(() => {
    checkStatus()
  }, [])

  useEffect(() => {
    verifyPayment(trxref, reference, push)
  },[])
  return (
    <div>
      <Spin tip="verifying payment..." style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "20%"}} />
    </div>
  )
}

export default PaymentVerificationPage
