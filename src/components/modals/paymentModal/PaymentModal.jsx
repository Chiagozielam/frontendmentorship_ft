import React, { useContext } from 'react'
import { Modal, Button } from 'antd'
import GeneralContext from '../../../context/generalContext/GeneralContext'
import './styles.scss'
import { faClock, faLockOpen } from '@fortawesome/free-solid-svg-icons'
import ButtonWithIcon from '../../buttonWithIcon/ButtonWithIcon'

const PaymentModal = () => {
    const { paymentModalOpened, setPaymentModalOpened } = useContext(GeneralContext)
    const togglePaymentModal = () => {
      setPaymentModalOpened(!paymentModalOpened)
    }
    return (
      <Modal
        visible={paymentModalOpened}
        onOk={togglePaymentModal}
        onCancel={togglePaymentModal}
        closable={false}
        transitionName=""
        footer={null}
        bodyStyle={{ height: "400px" }}
      >
        <div className="payment-modal-container">
            <h3>Unlock the Full Package</h3>
            <div className="top-discount-message-container">
              <ButtonWithIcon
                icon={faClock}
                buttonText="Grab our one-time discount offer now"
                textColor="#308623"
                iconColor="#308623"
                bgcolor="rgba(0, 255, 0, 0.45)"
                buttonRadius="0"
                fontSize="12px"
                iconSize="14px"
                buttonWidth="100%"
                buttonHeight="50px"
                buttonShadow="none"
              />
              <div className="price-container">
                <p className="main-price">
                  ₦100,000
                </p>
                <p className="discount-price">
                  ₦45,000
                </p>
              </div>
              <p className="bottom-text">
                Enjoying the platform? Take the discount offer and enjoy access to the rest of the lessons:
                A mentor, bonuses, and other community benefits.
              </p>
              <Button
                style={{
                  backgroundColor: "#F14A03",
                  width: "40%",
                  fontSize: "12px",
                  borderRadius: "10px",
                  height: "40px",
                  fontWeight: "600",
                  color: "white",
                  marginTop: "4%"
                }}
              >Proceed to pay</Button>
              <Button
                style={{
                  backgroundColor: "white",
                  width: "20%",
                  fontSize: "12px",
                  borderRadius: "10px",
                  height: "30px",
                  fontWeight: "600",
                  color: "#061088",
                  marginTop: "4%"
                }}
                onClick={togglePaymentModal}
              >
                Pay later
              </Button>
            </div>
        </div>
      </Modal>
    )
  }

  export default PaymentModal
