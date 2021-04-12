import React from 'react'
import Achievement from '../../../../components/achievement/achievement'
import { achievementsArray } from '../data'
import './styles.scss'

import { Row, Col, } from 'antd'

const Achievements = () => {

  return (
    <div className="achievements">
      <h1>My Achievements</h1>

      <div className="achievements-container">
      <Row justify="space-between">
        {
          achievementsArray.map((achievement) => (   
              <Col span={11}>
                <Achievement achievement={achievement} />
              </Col>
          ))
        }
      </Row>
      </div>

    </div>
  )
}

export default Achievements
