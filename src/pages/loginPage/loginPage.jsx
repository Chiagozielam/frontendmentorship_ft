import React from 'react'
import { Link } from 'react-router-dom'
import { Form, Row, Col } from 'antd'
import { Formik } from 'formik';
import * as yup from 'yup';
import NormalInput from '../../components/form/normalInput/normalInput';
import GeneralButton from '../../components/GeneralButton';
import { REGISTRATION_PAGE } from '../../routes';
import './styles.scss'


const validationSchema = yup.object().shape({
  email: yup.string().required().email('Email must be a valid email address'),
  password: yup
    .string()
    .required()
    .min(6, 'Password must be up to 6 characters'),
});

const LoginPage = () => {
  return (
    <div className="login-page">
      <Row>
        <Col span={9}>
          <div className="image-container"></div>
        </Col>
        <Col span={15}>
          <div className="form-container">
            <Formik
              initialValues={{ email: '', password: '' }}
              onSubmit={async (values, actions) => {
                console.log("submitting...")
              }}
              validationSchema={validationSchema}
            >
              {(formikProps) => (
                <div>
                  <div className="form-container">
                    <h3>Login</h3>
                    <Form>
                      <NormalInput
                        label="Email address"
                        iconName="mail"
                        type="email"
                        onChange={(event) => {
                          formikProps.handleChange('email')(event);
                        }}
                      />
                      <p style={{ color: 'red', textAlign: 'left' }}>{formikProps.errors.email}</p>
                      <div style={{ height: '20px' }} />
                      <NormalInput
                        label="Password"
                        iconName="key"
                        type="password"
                        onChange={(event) => {
                          formikProps.handleChange('password')(event);
                        }}
                      />
                      <p style={{ color: 'red', textAlign: 'left' }}>{formikProps.errors.password}</p>
                      {
                        formikProps.isSubmitting ? (
                          // <Spinner />
                          <p>Submitting...</p>
                        ) : (
                          <GeneralButton buttonText="Login"
                            onClick={formikProps.handleSubmit}
                          />
                        )
                      }
                    </Form>
                    <p className="create-account">
                      Don&rsquo;t have an account yet?
                      {' '}
                      <Link to={REGISTRATION_PAGE}>Create a free acount here</Link>
                      <br />
                      Forgot your password?
                      {' '}
                      <a href="!#">Reset password</a>
                    </p>
                  </div>
                </div>
              )}
            </Formik>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default LoginPage
