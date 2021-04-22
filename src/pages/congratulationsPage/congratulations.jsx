import React from 'react'
import './styles.scss'

// import { Row, Col, } from 'antd'

const CongratulationsPage = () => {
  return (
    <div className="congratulations-container">
      <img src="https://res.cloudinary.com/dcft8yhab/image/upload/v1573180878/iqcyjer6umg7umcpb1ok.gif" alt="A cartoon raising hands" />
      <h2>Congratulations...</h2>
      <p className="description-text">Your registration is complete. Now head on to your email and click on the email confirmation link sent to your mail and get access to your dashboard!</p>
      <p>you can close this page now.</p>
    </div>
   );
}
 
export default CongratulationsPage;