 import React, { useContext } from 'react'
import SideNavItem from './item'
import { Menu } from 'antd'
import './styles.scss'
import ButtonWithIcon from '../buttonWithIcon/ButtonWithIcon'
import { faLockOpen } from '@fortawesome/free-solid-svg-icons'
import GeneralContext from '../../context/generalContext/GeneralContext'
 
 const SideNav = ({ routes }) => {
   const { generalState, setPaymentModalOpened, paymentModalOpened  } = useContext(GeneralContext)

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
        {
          generalState.user?.paid == false ? (
            <div className="payment-button-container">
              <ButtonWithIcon icon={faLockOpen} onClick={togglePaymentModal} buttonText="Unlock the full package" padding="10% 5% 15% 5%" bgcolor="#2F2F2F" buttonRadius="0" />
            </div>
          ) : ''
        }
      </Menu>  
    </div>
   )
 }
 
 export default SideNav
 