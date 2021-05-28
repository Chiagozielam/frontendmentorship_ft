import "./styles.scss";
import { Form, Row, Col, Spin } from "antd";
import NormalInput from "../../components/form/normalInput/normalInput";
import GeneralButton from "../../components/GeneralButton";

const NewPassword = () => {
  return (
    <div className="new-password">
      <Row>
        <Col sm={24} lg={9}>
          <div className="image-container"></div>
        </Col>
        <Col sm={24} lg={15}>
          <div className="form-container">
            <h3>Create New Password</h3>
            <Form>
              <NormalInput label="New Password" type="password" />
              <NormalInput label="Confirm Password" type="password" />
              <div className="submit-btn">
                <GeneralButton
                  buttonText="Submit"
                  width="100%"
                  height="48px"
                  borderRadius="20px"
                />
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default NewPassword;
