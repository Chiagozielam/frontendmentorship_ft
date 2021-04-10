 import React from 'react'
import SideNavItem from './item'
import { Menu } from 'antd'
import './styles.scss'
 
 const SideNav = ({ routes }) => {
   return (
    <div>
      <Menu style={{marginTop: '50%'}} className="side-nav-section">
        {
          routes.map( dashRoute => (
            <SideNavItem properties={dashRoute} />
          ))
        }  
      </Menu>  
    </div>
   )
 }
 
 export default SideNav
 