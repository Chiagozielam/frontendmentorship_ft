import React, { useContext, useState } from 'react'
import { Modal, Button } from 'antd'
import GeneralContext from '../../../context/generalContext/GeneralContext'
import './styles.scss'
import { faClock, faLockOpen } from '@fortawesome/free-solid-svg-icons'
import ButtonWithIcon from '../../buttonWithIcon/ButtonWithIcon'
import CourseContext from '../../../context/course-context/CourseContext'
import GeneralModal from '../general-modal/GeneralModal'

const PaymentModal = () => {
    const { paymentModalOpened, setPaymentModalOpened } = useContext(GeneralContext)
    const [ paymentOptionsModalOpened, setPaymentOptionsModalOpened] = useState(false)
    const { initializePayment } = useContext(CourseContext)

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
        bodyStyle={{ height: "430px" }}
      >

        {/* This is for the payment options modal */}
          <GeneralModal
            modalOpened={paymentOptionsModalOpened}
            setModalOpened={setPaymentOptionsModalOpened}
            width="30%"
            height="370px"
            padding="15px"
          >
            <div className="payment-options-modal">
              <h2>Select Payment Option</h2>

              <Button
                style={{
                  backgroundColor: "#F14A03",
                  width: "65%",
                  fontSize: "12px",
                  borderRadius: "10px",
                  height: "40px",
                  fontWeight: "600",
                  color: "white",
                  marginTop: "1%"
                }}
                onClick={() => initializePayment()}
              >
                Pay with Paystack
              </Button>
              <h4 style={{ marginTop: "8%"}}>Pay by Bank Transfer</h4>
              <p className="bank-details-headers"><span>Bank Name: </span>FCMB</p>
              <p className="bank-details-headers"><span>Acount Number: </span><span className="account-number">5912125017</span></p>
              <p className="bank-details-headers"><span>Account Name: </span>Don Ugwu Daniel Chiagozielam</p>
              <p className="upload-receipt-instruction">
                Once the payment is made, please click on the button below and send the screenshot of payment
                to me directly on whatsapp.
              </p>
              <a target="_blank" href="https://google.com">
                <Button
                  style={{
                    backgroundColor: "white",
                    border: "2px solid #F14A03",
                    width: "65%",
                    fontSize: "12px",
                    borderRadius: "10px",
                    height: "40px",
                    fontWeight: "600",
                    color: "#F14A03",
                    marginTop: "1%"
                  }}
                  onClick={() => console.log("Hello World!")}
                >Upload Screenshot</Button>
              </a>
            </div>
          </GeneralModal>

        <div className="payment-modal-container">
            <h3>Pay now and worry no more about it forever</h3>
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
                  ₦44,990
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
                onClick={() => setPaymentOptionsModalOpened(true)}
              >Proceed to pay</Button>
              <Button
                style={{
                  backgroundColor: "white",
                  width: "35%",
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
