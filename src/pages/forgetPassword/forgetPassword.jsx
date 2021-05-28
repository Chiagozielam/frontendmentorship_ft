import "./styles.scss";
import { Form, Row, Col, Spin } from "antd";
import NormalInput from "../../components/form/normalInput/normalInput";
import GeneralButton from "../../components/GeneralButton";
import { REGISTRATION_PAGE } from "../../routes";
import { Link } from "react-router-dom";

const ForgetPAssword = () => {
  return (
    <div className="forget-password">
      <Row>
        <Col sm={24} lg={9}>
          <div className="image-container"></div>
        </Col>
        <Col sm={24} lg={15}>
          <div className="form-container">
            <h3>Forgot Password?</h3>
            <Form>
              <NormalInput label="Email address" iconName="mail" type="email" />
              <div className="submit-btn">
                <GeneralButton
                  buttonText="Reset Password"
                  width="100%"
                  height="48px"
                  borderRadius="20px"
                />
              </div>
            </Form>
            <p className="create-account">
              Don&rsquo;t have an account yet?{" "}
              <Link to={REGISTRATION_PAGE}>Create a free acount here</Link>
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ForgetPAssword;
