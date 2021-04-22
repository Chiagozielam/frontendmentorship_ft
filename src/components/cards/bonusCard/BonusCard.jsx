import React from 'react'
import { Row, Col } from 'antd'
import { string } from 'prop-types'
import './styles.scss'

const BonusCard = ({ image, heading, description }) => {
  return (
    <div className="bonus-card">
      <Row style={{justifyContent: 'space-between'}}>
        <Col sm={24} lg={10}>
          <div className="image-container">
            <img style={{ width: "100%"}} src={image} alt=""/>
          </div>
        </Col>
        <Col span={24} lg={13}>
          <div className="bonus-card-description-container">
            <p className="bonus-heading">
              {heading}
            </p>
            <p className="bonus-description">
              {description}
            </p>
          </div>
        </Col>
      </Row>
    </div>
  )
}

BonusCard.propTypes = {
  image: string.isRequired,
  title: string.isRequired,
  description: string.isRequired
}

export default BonusCard
