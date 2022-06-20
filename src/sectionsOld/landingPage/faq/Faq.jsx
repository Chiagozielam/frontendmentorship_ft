import React from 'react'
import { Col, Row, Collapse } from 'antd'
import './styles.scss'
import GeneralButton from '../../../components/GeneralButton'

const { Panel } = Collapse
const Faq = () => {
  
  const faqArray = [
    {
      title: "Do I need to keep a fixed time everyday to participate?",
      description: "No, absolutely not. Frontend mentorship is structured to be considerate towards people currently engaged and working in other jobs but still wish to start their journey in tech. You can choose the time you wish to learn, and the lessons would be available to you for a life time. We only advise that you are consistent.",
      key: 1
    },
    {
      title: "Do I need to pay to create an account?",
      description: "No. To create an account, simply click on any of the \" Get started \" buttons on the page. You will be take to your personalized dashboard and be able to access the free folders, you only need to pay to unlock the full package.",
      key: 2
    },
    {
      title: "Am I getting a certificate after completing the program?",
      description: "At this moment, we are not giving out certificates. Once the certification is available, every mentee would be sent an email on how to download yours. But if you're coming into tech, first thing you're thinking of should definitely not be a degree or certificate. ",
      key: 3
    },
    {
      title: "Do anything happen after I complete the program?",
      description: "Sure! After you have completed all the lessons which would ensure you have a have an amazing base in web development, you still have access to the bonus crash courses where we build different web designs and make clones of popular websites, to make sure that you have solid projects for your portfolio. we also have a podcast where you get access to episodes of bants from different people in tech and success strategies.",
      key: 4
    },
  ]
  const text = "Hello world"
  return (
    <div className="faq-section">
      <h2>Frequently Asked Questions</h2>
      <div className="collapsable-container">
      <Collapse accordion>
        {
          faqArray.map(({ title, description, key }) => (
            <Panel header={title} key={key}>
              <p className="collapsable-text">{description}</p>
            </Panel>
          ))
        }
      </Collapse>
      </div>
    </div>
  )
}

export default Faq
