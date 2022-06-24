import React, { useContext, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Form, Row, Col, Spin, Input } from 'antd';
import { Formik } from 'formik';
import * as yup from 'yup';
import NormalInput from '../../form/normalInput/normalInput';
import GeneralButton from '../../GeneralButton';
import HeaderText from '../../headerText/headerText';
import NormalText from '../../normalText/normalText';
import { UserOutlined, MailOutlined, EyeOutlined } from '@ant-design/icons';
import GeneralContext from '../../../context/generalContext/GeneralContext';
import { motion } from 'framer-motion';
import { Modal } from 'antd';

import {
  CONGRATULATION_PAGE,
  POST_AUTH_ROUTES,
  REGISTRATION_PAGE,
  FORGET_PASSWORD,
} from '../../../routes';
import AuthContext from '../../../context/authContext/AuthContext';
import './styles.scss';

const validationSchema = yup.object().shape({
  email: yup.string().required().email('Email must be a valid email address'),
  password: yup
    .string()
    .required()
    .min(6, 'Password must be up to 6 characters'),
});

const LoginModal = () => {
  const { push } = useHistory();

  const authContext = useContext(AuthContext);
  const { loginUser } = authContext;

  const checkStatus = () => {
    const user = localStorage.getItem('user');
    const userToken = localStorage.getItem('user-token');
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

  const { logInmodalOpened, setLogInmodalOpened } = useContext(GeneralContext);

  const handleCancel = () => {
    setLogInmodalOpened(false);
  };

  return (
    <>
      <Modal visible={logInmodalOpened} onCancel={handleCancel}>
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={(values, actions) => {
            const submitObject = {
              email: values.email,
              password: values.password,
            };
            actions.setSubmitting(true);
            loginUser(submitObject, actions, push);
            push('/dashboard');
            setLogInmodalOpened(false);
          }}
          validationSchema={validationSchema}
        >
          {(formikProps) => (
            <div>
              <div className='form_sub_container'>
                <HeaderText text='Login' className='form_header' />
                <Form>
                  <div className='each_input_fild'>
                    <div className='input_field_container'>
                      <MailOutlined className='icon' />

                      <NormalInput
                        label='Email address'
                        iconName='mail'
                        type='email'
                        placeholder='Input Email'
                        onChange={(event) => {
                          formikProps.handleChange('email')(event);
                        }}
                      />
                    </div>
                    <p style={{ color: 'red', textAlign: 'left' }}>
                      {formikProps.errors.email}
                    </p>
                  </div>

                  <div className='each_input_fild'>
                    <div className='input_field_container'>
                      <Form.Item>
                        <Input.Password
                          placeholder='Input Password'
                          onChange={(event) => {
                            formikProps.handleChange('password')(event);
                          }}
                        />
                      </Form.Item>
                      <p style={{ color: 'red', textAlign: 'left' }}>
                        {formikProps.errors.password}
                      </p>
                    </div>
                  </div>

                  <p className='forgot_password'>
                    {' '}
                    <Link
                      to={FORGET_PASSWORD}
                      onClick={() => {
                        setLogInmodalOpened(false);
                      }}
                    >
                      Forgot your password?
                    </Link>
                  </p>

                  {formikProps.isSubmitting ? (
                    <Spin tip='Loading...' />
                  ) : (
                    <div>
                      <GeneralButton
                        className='submit_btn'
                        buttonText='Login'
                        onClick={formikProps.handleSubmit}
                      />
                    </div>
                  )}
                </Form>
              </div>
            </div>
          )}
        </Formik>
      </Modal>
    </>
  );
};

export default LoginModal;
