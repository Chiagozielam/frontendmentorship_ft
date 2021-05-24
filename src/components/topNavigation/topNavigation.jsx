import React, { useState, useContext, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom'
import { Menu, Layout, Drawer, Avatar, Image } from 'antd';
import './styles.scss';
import GeneralButton from '../GeneralButton';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LOGIN_PAGE, REGISTRATION_PAGE } from '../../routes';
import { faBars, faLockOpen } from '@fortawesome/free-solid-svg-icons';
import AuthContext from '../../context/authContext/AuthContext';
import GeneralContext from '../../context/generalContext/GeneralContext'
import { dashRoutes } from '../../pages/postAuth/dashRoutes'
import SideNavItem from '../sideNav/item';
import ButtonWithIcon from '../buttonWithIcon/ButtonWithIcon';

const TopNavigation = () => {
  const [current, setCurrent] = useState('mail')
  const [drawerVisible, setDrawerVisible] = useState(false)
  const { isLoading, isSignout, userToken} = useContext(AuthContext)
  const { generalState, setPaymentModalOpened, paymentModalOpened, logOut } = useContext(GeneralContext)

  const togglePaymentModal = () => {
    setPaymentModalOpened(!paymentModalOpened)
  }

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
          generalState.userToken ? (
            <div style={{ display: "flex" }}>
              {
                generalState?.user?.paid == false ? (
                  <div className="payment-button-container">
                    <ButtonWithIcon boxShadow="0px 4px 4px rgba(6, 16, 136, 0.19)" onClick={togglePaymentModal} icon={faLockOpen} buttonText="Unlock the full package" padding="10% 5% 15% 5%" bgcolor="#2F2F2F" buttonRadius="0" />
                  </div>
                  ) : ''
              }
              <div className="user-avatar-container" onClick={toggleDrawer}>
                <img className="user-avatar-container-img" src={generalState?.user?.profilePhoto} />
                <div>
                  <p className="user-avatar-container-name">
                    {generalState?.user?.fullname}
                  </p>
                </div>
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
                    fontSize="16px"
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
                    style={{cursor: 'pointer'}}
                    onClick={() => {
                      push(dashRoute.path)
                      toggleDrawer()
                    }}
                  >{dashRoute.name}</p>
                ))
              }
              <p
                style={{cursor: 'pointer'}}
                onClick={() => {
                toggleDrawer()
                logOut(push)
              }}>LogOut</p>
              {
                generalState.user?.paid == false ? (
                  <div className="payment-button-container">
                    <ButtonWithIcon
                      onClick={() => {
                        togglePaymentModal()
                        toggleDrawer()
                      }}
                      icon={faLockOpen}
                      buttonText="Unlock the full package"
                      padding="10% 5% 15% 5%"
                      bgcolor="#2F2F2F"
                      buttonRadius="0"
                      boxShadow="0px 4px 4px rgba(6, 16, 136, 0.19)"
                    />
                  </div>
                  ) : ''
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
