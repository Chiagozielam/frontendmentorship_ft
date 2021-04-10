import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { Menu, Layout } from 'antd';
import { MailOutlined, AppstoreOutlined, BookOutlined } from '@ant-design/icons';
import './styles.scss';
import GeneralButton from '../GeneralButton';
import { LOGIN_PAGE, REGISTRATION_PAGE } from '../../routes';

const TopNavigation = () => {
  const [current, setCurrent] = useState('mail')

  const { push } = useHistory()

  const { SubMenu } = Menu;
  const { Header } = Layout

  const handleClick = e => {
    console.log('click ', e);
    setCurrent({ current: e.key });
  };
  return (
    <Header className="navigation_container">
      <p className="logo">FRONTEND MENTORSHIP</p>
      <Menu onClick={handleClick} className="right-side-nav" selectedKeys={[current]} mode="horizontal">
        <Menu.Item>
          View Curriculum
        </Menu.Item>
        <Menu.Item onClick={() => push(LOGIN_PAGE)}>
          Login
        </Menu.Item>
        <Menu.Item>
          <GeneralButton
            buttonText="Signup for free"
            onClick={() => push(REGISTRATION_PAGE) }
          />
        </Menu.Item>
      </Menu>
    </Header>
  )
}

export default TopNavigation
