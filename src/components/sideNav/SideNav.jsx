 import React, { useContext } from 'react'
import SideNavItem from './item'
import { Menu } from 'antd'
import './styles.scss'
import ButtonWithIcon from '../buttonWithIcon/ButtonWithIcon'
import { faLockOpen, faPowerOff } from '@fortawesome/free-solid-svg-icons'
import GeneralContext from '../../context/generalContext/GeneralContext'
import { Link } from 'react-router-dom'
import AuthContext from '../../context/authContext/AuthContext'
import { LOGIN_PAGE } from "../../routes";
import { useHistory } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const { Item } = Menu
 
 const SideNav = ({ routes }) => {
   const { generalState, setPaymentModalOpened, paymentModalOpened, logOut} = useContext(GeneralContext)
  // const { resendVerification } = useContext(AuthContext)

   
  const { push } = useHistory()
   
   let hover = () => {
    console.log('hover');
  }  

   const togglePaymentModal = () => {
     setPaymentModalOpened(!paymentModalOpened)
   }
   return (
    <div>
      <Menu style={{marginTop: '50%'}} className="side-nav-section">
        {
          routes.map( dashRoute => (
            <SideNavItem properties={dashRoute} />
          ))
         }
         <div className="side-nav-item-container" style={{marginTop: '30px'}} >
            <Item icon={<FontAwesomeIcon icon={faPowerOff} />} key="1" onClick={()=> logOut(push)} onItemHover={hover}>
              <Link className="side-nav-item-link">LogOut</Link>
            </Item>
          </div>
        {
          generalState.user?.paid == false ? (
            <div className="payment-button-container">
              <ButtonWithIcon boxShadow="0px 4px 4px rgba(6, 16, 136, 0.19)" icon={faLockOpen} onClick={togglePaymentModal} buttonText="Unlock the full package" padding="10% 5% 15% 5%" bgcolor="#2F2F2F" buttonRadius="0" />
            </div>
          ) : ''
        }
      </Menu>  
    </div>
   )
 }
 
 export default SideNav
 