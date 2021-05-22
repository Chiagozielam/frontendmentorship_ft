import React from 'react'
import { Modal } from 'antd'
import './styles.scss'

const GeneralModal = ({ children, width, height, setModalOpened, modalOpened }) => {
  const toggleModal = () => {
    setModalOpened(!modalOpened)
  }
  return (
    <Modal
      visible={modalOpened}
      onOk={toggleModal}
      onCancel={toggleModal}
      closable={false}
      transitionName=""
      footer={null}
      bodyStyle={{ height: `${height}`}}
      width={`${width}`}
      className="general-modal-component"
    >
        {children}
    </Modal>
  )
}

  export default GeneralModal
