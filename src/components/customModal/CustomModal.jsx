import React from 'react'
import './styles.scss'

const CustomModal = ({ children, boxHeight, showModal, onShowOrHide }) => {
  return (
    <div>
      {
        showModal ? (
          <div className="outer-modal-box">
            <div className="inner-modal-container" style={{ height: `${boxHeight}` }}>
              {children}
            </div>
          </div>
        ) : ''
      }
    </div>
  )
}

export default CustomModal
