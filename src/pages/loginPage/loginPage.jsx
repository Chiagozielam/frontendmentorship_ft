import React, { useContext, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Form, Row, Col, Spin } from 'antd'
import { Formik } from 'formik';
import * as yup from 'yup';
import NormalInput from '../../components/form/normalInput/normalInput';
import GeneralButton from '../../components/GeneralButton';
import { CONGRATULATION_PAGE, POST_AUTH_ROUTES, REGISTRATION_PAGE } from '../../routes';
import AuthContext from '../../context/authContext/AuthContext'
import { LESSON_FOLDER_PAGE } from '../../routes';
import './styles.scss'


const validationSchema = yup.object().shape({
  email: yup.string().required().email('Email must be a valid email address'),
  password: yup
    .string()
    .required()
    .min(6, 'Password must be up to 6 characters'),
});

const LoginPage = () => {

  const { push } = useHistory()

  const authContext = useContext(AuthContext)
  const { loginUser } = authContext

  const checkStatus = () => {
    const user = localStorage.getItem("user")
    const userToken = localStorage.getItem("user-token")
    if(user && userToken){
      push(POST_AUTH_ROUTES)
    }
    if(user && !userToken){
      push(CONGRATULATION_PAGE)
    }
    return
  }
  useEffect(() => {
    checkStatus()
  }, [])

  return (
    <div className="login-page">
      <Row>
        <Col sm={24} lg={9}>
          <div className="image-container"></div>
        </Col>
        <Col sm={24} lg={15}>
          <div className="form-container">
            <Formik
              initialValues={{ email: '', password: '' }}
              onSubmit={(values, actions) => {
                const submitObject = {
                  email: values.email,
                  password: values.password
                }
                actions.setSubmitting(true)
                loginUser(submitObject, actions, push)
                // push('/dashboard')
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
                          <Spin tip="Loading..." />
                        ) : (
                          <div>
                            <div className="submit-btn">
                              <GeneralButton buttonText="Login"
                                onClick={formikProps.handleSubmit}
                              />
                            </div>
                            <div className="mobile-submit-btn">
                              <GeneralButton buttonText="Login"
                                onClick={formikProps.handleSubmit}
                                borderRadius="10px"
                                width="100%"
                                height="54.84px"
                                fontSize="16px"
                              />
                            </div>
                          </div>
                        )
                      }
                    </Form>
                    <p className="create-account">
                      Don&rsquo;t have an account yet?
                      {' '}
                      <Link to={REGISTRATION_PAGE}>Create a free acount here</Link>
                    </p>
                    <p className="forgot-password">
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
