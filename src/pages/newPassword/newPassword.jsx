import './styles.scss';
import { Row, Col, Alert, Spin } from 'antd';
import NormalInput from '../../components/form/normalInput/normalInput';
import GeneralButton from '../../components/GeneralButton';
import { useState } from 'react';
import { BASE_URI } from '../../constants/baseUri';
import axios from 'axios';
import { REGISTRATION_PAGE } from '../../routes';
import { EyeOutlined } from '@ant-design/icons';
import HeaderText from '../../components/headerText/headerText';
import NormalText from '../../components/normalText/normalText';
import { Link, useHistory } from 'react-router-dom';
import PasswordInput from '../../components/form/passwordInput/passwordInput';
const SetPassword = () => {
  const token = new URLSearchParams(document.location.search.substring(1)).get(
    'token'
  );

  const { push } = useHistory();

  // if (!token) {
  //   push("/login");
  // }

  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const [newPassword, setNewPassword] = useState('');
  const [confrimPassword, setConfrimPassword] = useState('');
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const sendNewPassword = async (e) => {
    e.preventDefault();

    if (newPassword === confrimPassword && newPassword.length >= 6) {
      setIsLoading(true);
      let submitObject = { newPassword };

      let config = {
        method: 'post',
        url: `${BASE_URI}/user/changepassword`,
        headers: {
          'user-token': token,
        },
        data: submitObject,
      };

      try {
        const sendRequest = await axios(config);
        setAlertMessage(sendRequest.data.message);
        setShowAlert(true);
        setIsLoading(false);
        setTimeout(() => {
          push('/login');
        }, 3500);
      } catch (err) {
        console.log(err);
      }
    } else if (newPassword !== confrimPassword) {
      setShowErrorMessage(true);
      setErrorMessage('Passwords do not match');
      setTimeout(() => {
        setShowErrorMessage(false);
      }, 3000);
    } else if (newPassword.length < 6) {
      setShowErrorMessage(true);
      setErrorMessage('Password must be up to 6 characters');
      setTimeout(() => {
        setShowErrorMessage(false);
      }, 3000);
    }
  };
  return (
    <div className='new-password'>
      <Row>
        <Col sm={24} md={11}>
          <div className='image-container'>
            <div className='sub_container'>
              <div className='text_container'>
                <HeaderText text='Welcome!' className='welcome_header' />
                <NormalText
                  className='sub_text'
                  text='Mi libero neque consectetur amet mi neque cursus. Dignissim facilisi vitae consequat facilisis bibendum ultrices.'
                />
              </div>
            </div>
          </div>
        </Col>
        <Col sm={24} md={13}>
          <div className='form-container'>
            {showAlert && (
              <div className='form-alert'>
                <Alert
                  message={alertMessage}
                  type='success'
                  closable
                  onClose={() => setShowAlert(false)}
                />
              </div>
            )}
            <div className='form_sub_container'>
              <HeaderText text='Create New Password' className='form_header' />
              <form onSubmit={sendNewPassword}>
                <div className='each_input_fild'>
                  <div className='input_field_container'>
                    <PasswordInput
                      icon={<EyeOutlined className='icon' />}
                      label='New Password'
                      placeholder='Input new Password'
                      iconName='key'
                      type='password'
                      inputValue={newPassword}
                      onChange={(event) => setNewPassword(event.target.value)}
                    />
                  </div>
                  {showErrorMessage && (
                    <p style={{ color: 'red', textAlign: 'left' }}>
                      {errorMessage}
                    </p>
                  )}
                </div>

                <div className='each_input_fild'>
                  <div className='input_field_container'>
                    <PasswordInput
                      icon={<EyeOutlined className='icon' />}
                      label='Confirm Password'
                      type='password'
                      placeholder='Confirm password'
                      inputValue={confrimPassword}
                      onChange={(event) =>
                        setConfrimPassword(event.target.value)
                      }
                    />
                  </div>
                  {showErrorMessage && (
                    <p style={{ color: 'red', textAlign: 'left' }}>
                      {errorMessage}
                    </p>
                  )}
                </div>

                <div className='submit-btn'>
                  {isLoading ? (
                    <Spin
                      tip='Creating new password...'
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: '-5%',
                        marginBottom: '10%',
                        padding: '5%',
                      }}
                    />
                  ) : (
                    <GeneralButton
                      buttonText='Submit'
                      width='100%'
                      height='54px'
                      borderRadius='10px'
                      htmlType='submit'
                    />
                  )}
                </div>
                <p className='create-account'>
                  Don&rsquo;t have an account yet?{' '}
                  <Link to={REGISTRATION_PAGE}>Create a free acount here</Link>
                </p>
              </form>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default SetPassword;
