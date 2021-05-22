import React from 'react'
import { Modal, Button } from 'antd'
import './styles.scss'
import { faClock, faLockOpen } from '@fortawesome/free-solid-svg-icons'
import ButtonWithIcon from '../../buttonWithIcon/ButtonWithIcon'
import Video from '../../../components/lessonVideoPlay/lessonVideoPlay'


const BonusVideoModal = ({ setBonusVideoModalOpened, bonusVideoModalOpened, currentBonusData }) => {
  const toggleBonusVideoModal = () => {
    setBonusVideoModalOpened(!bonusVideoModalOpened)
  }
  return (
    <Modal
      visible={bonusVideoModalOpened}
      onOk={toggleBonusVideoModal}
      onCancel={toggleBonusVideoModal}
      closable={false}
      transitionName=""
      footer={null}
      bodyStyle={{ height: "550px"}}
      width={"90%"}
    >
      <div className="bonus-video-modal-container">
        <div className="video-container">
          <Video link={currentBonusData?.videoUrl} />
        </div>
        <div className="rest-of-body">
          <p className="video-title">
            {currentBonusData?.bonusTitle}
          </p>
          <p className="video-description">
            {currentBonusData?.bonusDescription}
          </p>
        </div>
      </div>
    </Modal>
  )
}

  export default BonusVideoModal
