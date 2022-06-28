import "./styles.scss";
import { Modal, Button } from "antd";
import GeneralContext from "../../context/generalContext/GeneralContext";
import { useContext } from "react";
import { useHistory } from "react-router";

const LogoutModal = () => {
  const { push } = useHistory();

  const { logoutModalOpened, setLogOutModalOpened, logOut } =
    useContext(GeneralContext);

  return (
    <Modal
      visible={logoutModalOpened}
      // onOk={togglePaymentModal}
      onCancel={() => setLogOutModalOpened(false)}
      closable={false}
      transitionName=""
      footer={null}
      mask={true}
      className="logout-modal"
      maskStyle={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
      bodyStyle={{ height: "auto", padding: "0" }}
    >
      <div className="logout-modal-container">
        <div className="logout-text">
          <span>Are you sure you want to logout?</span>
        </div>
        <div className="logout-button">
          <Button
            style={{
              backgroundColor: "#F14A03",
              width: "100px",
              fontSize: "12px",
              borderRadius: "10px",
              height: "40px",
              fontWeight: "600",
              color: "white",
              marginRight: "10px",
            }}
            onClick={() => logOut(push)}
          >
            Log Out{" "}
          </Button>
          <Button
            style={{
              backgroundColor: "white",
              width: "100px",
              fontSize: "12px",
              borderRadius: "10px",
              height: "40px",
              fontWeight: "600",
              color: "#061088",
            }}
            onClick={() => setLogOutModalOpened(false)}
          >
            Cancel
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default LogoutModal;
