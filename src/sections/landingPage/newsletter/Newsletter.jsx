import React from 'react'
import GeneralButton from '../../../components/GeneralButton'
import './styles.scss'

const Newsletter = () => {
  return (
    <div className="newsletter-section">
      <div className="heading-container" style={{marginTop: "8%"}}>
        <p className="header">Subscribe To Our <br/> Newsletter</p>
        <p className="sub-header">
          Be one of the earliest persons to know about new offers or <br/>
          other free helpful content we will provide in future!
        </p>
      </div>
      <form>
        <input
          className="newsletter-input"
          type="email"
          name="email"
          placeholder="Enter your email here..."
        />
      </form>
      <GeneralButton
        buttonText="Subscribe"
      />
    </div>
  )
}

export default Newsletter
