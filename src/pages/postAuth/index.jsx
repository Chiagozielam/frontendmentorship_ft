import React from 'react'
import { BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom'
import { Row, Col, Layout } from 'antd'
import SideNav from '../../components/sideNav/SideNav'
import { LESSONS_PAGE } from '../../routes'
import LessonsPage from './lessonsPage/lessonsPage'
import { dashRoutes } from './dashRoutes'
import './styles.scss'

const { Content, Sider } = Layout
const PostAuth = () => {
  return (
    <Layout className="dashboard-container">
      <Sider className="side-nav">
        <SideNav routes={dashRoutes} />
      </Sider>
      <Content className="dashboard-content">
        <Switch>
          {
            dashRoutes.map( dashRoute => (
              <Route exact={dashRoute.exact} path={dashRoute.path} component={dashRoute.component} />
            ))
          }
        </Switch>
      </Content>
    </Layout>
  )
}

export default PostAuth
