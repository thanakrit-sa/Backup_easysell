import React from "react";
import { Link, Switch, Redirect } from "react-router-dom";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import { LayoutSplashScreen,ContentRoute } from "../../../../_metronic/layout"
import Login from "./Login";
import Registration from "./Registration";
import ForgotPassword from "./ForgotPassword";
import "../../../../_metronic/_assets/sass/pages/login/classic/login-1.scss";
import Facebook from "./Facebook";
import Test from './test'
import Layout from '../../../../_metronic/layout/components/Layout'

export function AuthPage() {
  return (
    <>
      <div className="login login-1 login-signin-on d-flex flex-column flex-lg-row flex-row-fluid bg-white" id="kt_login">
        <div className="d-flex flex-column-fluid flex-center mt-30 mt-lg-0">
          <Switch>
            <ContentRoute path="/auth/login" component={Login} />
            <ContentRoute path="/auth/registration" component={Registration} />
            <ContentRoute path="/auth/facebook" component={Facebook} />
            <ContentRoute path="/auth/test" component={Test} />
            {/* <ContentRoute path="/auth/Warehouse" component={Layout} /> */}
            <ContentRoute
              path="/auth/forgot-password"
              component={ForgotPassword}
            />
            <Redirect from="/auth" exact={true} to="/auth/login" />
            <Redirect to="/auth/login" />
          </Switch>
        </div>
      </div>
    </>
  );
}
