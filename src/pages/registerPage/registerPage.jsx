import React, { useEffect, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { Form, Row, Col, Radio, Spin } from "antd";
import { UserOutlined, MailOutlined, EyeOutlined } from "@ant-design/icons";
import { Formik } from "formik";
import * as yup from "yup";
import NormalInput from "../../components/form/normalInput/normalInput";
import GeneralButton from "../../components/GeneralButton";
import {
  CONGRATULATION_PAGE,
  LESSON_FOLDER_PAGE,
  LOGIN_PAGE,
  POST_AUTH_ROUTES,
  REGISTRATION_PAGE,
} from "../../routes";
import AuthContext from "../../context/authContext/AuthContext";
import "./styles.scss";
import HeaderText from "../../components/headerText/headerText";
import NormalText from "../../components/normalText/normalText";
import PasswordInput from "../../components/form/passwordInput/passwordInput";

const validationSchema = yup.object().shape({
  fullname: yup.string().required("You cannot leave the name field blank"),
  email: yup.string().required().email("Email must be a valid email address"),
  phoneNumber: yup
    .number()
    .required("The phone number should be valid")
    .min(6, "The phone number should be valid"),
  password: yup
    .string()
    .required()
    .min(6, "Password must be up to 6 characters"),
  gender: yup.string().required("You need to select your gender"),
});

const RegisterPage = () => {
  const { push } = useHistory();
  const authContext = useContext(AuthContext);
  const { registerUser } = authContext;

  const checkStatus = () => {
    const user = localStorage.getItem("user");
    const userToken = localStorage.getItem("user-token");
    if (user && userToken) {
      push(POST_AUTH_ROUTES);
    }
    if (user && !userToken) {
      push(CONGRATULATION_PAGE);
    }
    return;
  };
  useEffect(() => {
    checkStatus();
  }, []);

  return (
    <div className="registration-page">
      <Row>
        <Col sm={24} md={11}>
          <div className="image-container">
            <div className="sub_container">
              <div className="text_container">
                <HeaderText text="Welcome!" className="welcome_header" />
                <NormalText
                  className="sub_text"
                  text="Mi libero neque consectetur amet mi neque cursus. Dignissim facilisi vitae consequat facilisis bibendum ultrices."
                />
              </div>
            </div>
          </div>
        </Col>
        <Col sm={24} md={13}>
          <div className="form-container">
            <Formik
              initialValues={{
                fullname: "",
                email: "",
                password: "",
                gender: "",
                phoneNumber: null,
              }}
              onSubmit={(values, actions) => {
                const { fullname, email, password, gender, phoneNumber } =
                  values;
                const submitObject = {
                  fullname,
                  email,
                  phoneNumber,
                  password,
                  gender,
                };
                actions.setSubmitting(true);
                registerUser(submitObject, actions, push);
              }}
              validationSchema={validationSchema}
            >
              {(formikProps) => (
                <div className="form_sub_container">
                  <HeaderText
                    text="Register for Free"
                    className="form_header"
                  />
                  <Form>
                    <div className="each_input_fild">
                      <div className="input_field_container">
                        <NormalInput
                          icon={<UserOutlined className="icon" />}
                          label="Full Name"
                          placeholder="Input Your name"
                          type="text"
                          onChange={(event) => {
                            formikProps.handleChange("fullname")(event);
                          }}
                        />
                      </div>
                      <p style={{ color: "red", textAlign: "left" }}>
                        {formikProps.errors.fullname}
                      </p>
                    </div>

                    <div className="each_input_fild">
                      <div className="input_field_container">
                        <NormalInput
                          icon={<MailOutlined className="icon" />}
                          label="Email address"
                          iconName="mail"
                          placeholder="Input Email"
                          type="email"
                          onChange={(event) => {
                            formikProps.handleChange("email")(event);
                          }}
                        />
                      </div>
                      <p style={{ color: "red", textAlign: "left" }}>
                        {formikProps.errors.email}
                      </p>
                    </div>

                    <div className="each_input_fild">
                      <div className="input_field_container">
                        <PasswordInput
                          icon={<EyeOutlined className="icon" />}
                          label="Password"
                          iconName="key"
                          type="password"
                          placeholder="Create Password"
                          onChange={(event) => {
                            formikProps.handleChange("password")(event);
                          }}
                        />
                      </div>
                      <p style={{ color: "red", textAlign: "left" }}>
                        {formikProps.errors.password}
                      </p>
                    </div>

                    <div className="gender-container">
                      <Radio.Group
                        onChange={(event) => {
                          formikProps.handleChange("gender")(
                            event.target.value
                          );
                        }}
                      >
                        <Radio value="male">Male</Radio>
                        <Radio value="female">Female</Radio>
                      </Radio.Group>
                      <p style={{ color: "red", textAlign: "left" }}>
                        {formikProps.errors.gender}
                      </p>
                    </div>
                    {formikProps.isSubmitting ? (
                      <Spin tip="Loading..." />
                    ) : (
                      <div>
                        <GeneralButton
                          className="submit-btn"
                          buttonText="Register"
                          onClick={formikProps.handleSubmit}
                        />
                      </div>
                    )}
                  </Form>
                </div>
              )}
            </Formik>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default RegisterPage;
