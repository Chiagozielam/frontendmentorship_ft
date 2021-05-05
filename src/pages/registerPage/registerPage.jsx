import React, { useEffect, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Form, Row, Col, Radio, Spin } from 'antd'
import { Formik } from 'formik';
import * as yup from 'yup';
import NormalInput from '../../components/form/normalInput/normalInput';
import GeneralButton from '../../components/GeneralButton';
import { CONGRATULATION_PAGE, LESSON_FOLDER_PAGE, LOGIN_PAGE, POST_AUTH_ROUTES, REGISTRATION_PAGE } from '../../routes';
import AuthContext from '../../context/authContext/AuthContext'
import './styles.scss'


const validationSchema = yup.object().shape({
  fullname: yup.string().required('You cannot leave the name field blank'),
  email: yup.string().required().email('Email must be a valid email address'),
  phoneNumber: yup
  .number()
  .required('The phone number should be valid')
  .min(6, 'The phone number should be valid'),
  password: yup
    .string()
    .required()
    .min(6, 'Password must be up to 6 characters'),
  gender: yup.string().required('You need to select your gender'),
});

const RegisterPage = () => {
  const { push } = useHistory()
  const authContext = useContext(AuthContext)
  const { registerUser } = authContext

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
    <div className="registration-page">
      <Row>
        <Col sm={24} lg={9}>
          <div className="image-container"></div>
        </Col>
        <Col sm={24} lg={15}>
          <div className="form-container">
            <Formik
              initialValues={{ fullname: '', email: '', password: '', gender: '', phoneNumber: null }}
              onSubmit={(values, actions) => {
                const { fullname, email, password, gender, phoneNumber } = values
                const submitObject = {
                  fullname,
                  email,
                  phoneNumber,
                  password,
                  gender
                }
                actions.setSubmitting(true)
                registerUser(submitObject, actions, push)
              }}
              validationSchema={validationSchema}
            >
              {(formikProps) => (
                <div>
                  <div className="form-container">
                    <h3>Create Account</h3>
                    <Form>
                      <NormalInput
                        label="Full Name"
                        type="text"
                        onChange={(event) => {
                          formikProps.handleChange('fullname')(event);
                        }}
                      />
                      <p style={{ color: 'red', textAlign: 'left' }}>{formikProps.errors.fullname}</p>
                      <NormalInput
                        label="Email address"
                        iconName="mail"
                        type="email"
                        onChange={(event) => {
                          formikProps.handleChange('email')(event);
                        }}
                      />
                      <p style={{ color: 'red', textAlign: 'left' }}>{formikProps.errors.email}</p>

                      <NormalInput
                        label="Phone Number"
                        iconName="phone"
                        type="number"
                        onChange={(event) => {
                          formikProps.handleChange('phoneNumber')(event);
                        }}
                      />
                      <p style={{ color: 'red', textAlign: 'left' }}>{formikProps.errors.phoneNumber}</p>

                      <NormalInput
                        label="Password"
                        iconName="key"
                        type="password"
                        onChange={(event) => {
                          formikProps.handleChange('password')(event);
                        }}
                      />
                      <p style={{ color: 'red', textAlign: 'left' }}>{formikProps.errors.password}</p>

                      <div className="gender-container">
                        <label className="gender-label">Gender</label>
                        <Radio.Group onChange={(event) => {
                          formikProps.handleChange('gender')(event.target.value)
                        }}>
                          <Radio value="male">Male</Radio>
                          <Radio value="female">Female</Radio>
                        </Radio.Group>
                        <p style={{ color: 'red', textAlign: 'left' }}>{formikProps.errors.gender}</p>
                      </div>
                      {
                        formikProps.isSubmitting ? (
                          <Spin tip="Loading..." />
                        ) : (
                          <div>
                            <div className="submit-btn">
                              <GeneralButton buttonText="Create account"
                                onClick={formikProps.handleSubmit}
                              />
                            </div>
                            <div className="mobile-submit-btn">
                              <GeneralButton buttonText="Create a free account"
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
                      Already have an account?
                      {' '}
                      <Link to={LOGIN_PAGE}>Login</Link>
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

export default RegisterPage
