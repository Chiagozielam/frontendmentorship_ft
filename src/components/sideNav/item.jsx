import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'antd'
import { object } from 'prop-types'
import './styles.scss'

const { Item } = Menu

const SideNavItem = ({properties}) => {
  return (
    <div className="side-nav-item-container">
      <Item icon={properties.icon} key={properties.path}>
        <Link className="side-nav-item-link" to={properties.path}>{properties.name}</Link>
      </Item>
    </div>
  )
}

SideNavItem.propTypes = {
  properties: object.isRequired
}

export default SideNavItem
