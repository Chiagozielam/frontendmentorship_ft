import React, { useContext, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter
} from "react-router-dom";
import { Row, Col, Layout } from "antd";
import SideNav from "../../components/sideNav/SideNav";
import { LESSON_FOLDER_PAGE } from "../../routes";
import { dashRoutes } from "./dashRoutes";
import GeneralContext from "../../context/generalContext/GeneralContext";
import FolderPage from "./folderPage/folderPage";
import "./styles.scss";
import PaymentModal from "../../components/modals/paymentModal/PaymentModal";

const { Content, Sider } = Layout;

const PostAuth = () => {
  const { checkThatUserHasPaid } = useContext(GeneralContext);
  useEffect(() => {
    checkThatUserHasPaid();
  }, []);
  return (
    <Layout className="dashboard-container">
      <PaymentModal />
      <Sider className="side-nav">
        <SideNav routes={dashRoutes} />
      </Sider>
      <Content className="dashboard-content">
        <Switch>
          {dashRoutes.map(dashRoute => (
            <Route
              exact={dashRoute.exact}
              path={dashRoute.path}
              component={dashRoute.component}
            />
          ))}
          <Route
            exact={false}
            path={LESSON_FOLDER_PAGE}
            component={FolderPage}
          />
        </Switch>
      </Content>
    </Layout>
  );
};

export default PostAuth;
