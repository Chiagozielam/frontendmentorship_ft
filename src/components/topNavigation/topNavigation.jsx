import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { Menu, Layout, Drawer } from 'antd';
import { MailOutlined, AppstoreOutlined, BookOutlined } from '@ant-design/icons';
import './styles.scss';
import GeneralButton from '../GeneralButton';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LOGIN_PAGE, REGISTRATION_PAGE } from '../../routes';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const TopNavigation = () => {
  const [current, setCurrent] = useState('mail')
  const [drawerVisible, setDrawerVisible] = useState(false)

  const { push } = useHistory()

  const { SubMenu } = Menu;
  const { Header } = Layout

  const handleClick = e => {
    console.log('click ', e);
    setCurrent({ current: e.key });
  };

  const toggleDrawer = () => {
    setDrawerVisible(!drawerVisible)
  }
  return (
    <div className="overall-nav-container">
      <Header className="navigation_container">
        <p className="logo">FRONTEND MENTORSHIP</p>
        <FontAwesomeIcon onClick={toggleDrawer} className="hamburger-icon" icon={faBars} />
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

      <Drawer
        className="side-drawer"
        title="Frontend Mentorship"
        placement="right"
        closable={false}
        onClose={toggleDrawer}
        visible={drawerVisible}
      >
        <p
          onClick={() => {
            toggleDrawer()
            push(LOGIN_PAGE)
          }}
        >Login</p>
        <p>View Curriculum</p>
        <GeneralButton
          buttonText="Signup for free"
          onClick={() => {
            toggleDrawer()
            push(REGISTRATION_PAGE)
          }}
        />
      </Drawer>
    </div>
  )
}

export default TopNavigation
