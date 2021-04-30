import React, { useState, useContext, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom'
import { Menu, Layout, Drawer, Avatar, Image } from 'antd';
import './styles.scss';
import GeneralButton from '../GeneralButton';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LOGIN_PAGE, REGISTRATION_PAGE } from '../../routes';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import AuthContext from '../../context/authContext/AuthContext';
import GeneralContext from '../../context/generalContext/GeneralContext'
import { dashRoutes } from '../../pages/postAuth/dashRoutes'
import SideNavItem from '../sideNav/item';

const TopNavigation = () => {
  const [current, setCurrent] = useState('mail')
  const [drawerVisible, setDrawerVisible] = useState(false)
  const { isLoading, isSignout, userToken} = useContext(AuthContext)
  const { generalState } = useContext(GeneralContext)

  const { push } = useHistory()

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
        <p className="logo" onClick={() => push('/')}>FRONTEND MENTORSHIP</p>
        {
          generalState.user ? (
            <div className="user-avatar-container" onClick={toggleDrawer}>
              <img className="user-avatar-container-img" src={generalState.user.profilePhoto} />
              <div>
                <p className="user-avatar-container-name">
                  {generalState.user.fullname}
                </p>
              </div>
            </div>
          ) : (
            <span>
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
            </span>
          )
        }
      </Header>

      <Drawer
        className="side-drawer"
        title="Frontend Mentorship"
        placement="right"
        closable={false}
        onClose={toggleDrawer}
        visible={drawerVisible}
      >
        {
          generalState.user ? (
            <div>
              {
                dashRoutes.map(dashRoute => (
                  <p
                    onClick={() => {
                      push(dashRoute.path)
                      toggleDrawer()
                    }}
                  >{dashRoute.name}</p>
                ))
              }
            </div>
          ) : (
            <div>
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
            </div>
          )
        }
      </Drawer>
    </div>
  )
}

export default TopNavigation
