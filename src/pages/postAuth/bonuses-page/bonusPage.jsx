import React from 'react'
import BonusPageCard from './card'
import { Row, Col } from 'antd'
import './styles.scss'

const BonusPage = () => {
  const bonusArray = [
    {
      bonusImage: "https://madewithreact.com/content/images/2016/12/react-linkedin-clone.png",
      bonusTitle: "Building a LinkedIn UI clone",
      bonusDescription: "In this tutorial, let's build a clone for the homepage of linkedin"
    },
    {
      bonusImage: "https://i.graphicmama.com/blog/wp-content/uploads/2020/07/23143645/17-Inspiring-Ui-Ux-Designer-Portfolios-That-Take-Design-to-the-Next-Level.jpg",
      bonusTitle: "Building a portfolio website",
      bonusDescription: "In this tutorial, let's build a clone for the homepage of linkedin"
    },
    {
      bonusImage: "https://i.ytimg.com/vi/OBVVXgA-dhQ/maxresdefault.jpg",
      bonusTitle: "Building a Facebook UI clone",
      bonusDescription: "In this tutorial, let's build a clone for the homepage of linkedin"
    },
    {
      bonusImage: "https://madewithreact.com/content/images/2016/12/react-linkedin-clone.png",
      bonusTitle: "Building a LinkedIn UI clone",
      bonusDescription: "In this tutorial, let's build a clone for the homepage of linkedin"
    },
    {
      bonusImage: "https://i.graphicmama.com/blog/wp-content/uploads/2020/07/23143645/17-Inspiring-Ui-Ux-Designer-Portfolios-That-Take-Design-to-the-Next-Level.jpg",
      bonusTitle: "Building a LinkedIn UI clone",
      bonusDescription: "In this tutorial, let's build a clone for the homepage of linkedin"
    },
  ]
  return (
    <div className="bonuses-page">
      <h1>Bonus Crash Courses</h1>
      <Row justify="space-between">
        {
          bonusArray.map(bonus => (
            <Col sm={24} lg={7}>
              <BonusPageCard
                title={bonus.bonusTitle}
                image={bonus.bonusImage}
                description={bonus.bonusDescription}
              />
            </Col>
          ))
        }
      </Row>
    </div>
  )
}

export default BonusPage
