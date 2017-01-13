//Base Packages/Functionality
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Meteor } from 'meteor/meteor';
import { App } from '../../ui/layouts/app';
import { Admin } from '../../ui/layouts/admin';
//Pages
import { Index } from '../../ui/pages/index';
import { Login } from '../../ui/pages/login';
import { NotFound } from '../../ui/pages/not-found';
import { RecoverPassword } from '../../ui/pages/recover-password';
import { ResetPassword } from '../../ui/pages/reset-password';
import { Signup } from '../../ui/pages/signup';
import { ProfilePage } from '../../ui/pages/profile';
import { ContactPage } from '../../ui/pages/contact';
//Admin
import { AdminHomePage } from '../../ui/pages/admin/admin-home';
import { AdminLoginPage } from '../../ui/pages/admin/admin-login';
//Theme
import enUS from 'antd/lib/locale-provider/en_US';
import { LocaleProvider } from 'antd'


const requireAuth = (nextState, replace) => {
  if (!Meteor.loggingIn() && !Meteor.userId()) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname },
    });
  }
};

Meteor.startup(() => {
  render(
    <LocaleProvider locale={enUS}>
    <Router history={ browserHistory }>
      <Route path="/" component={ App }>
        <IndexRoute name="index" component={ Index } />
        <Route name="login" path="/login" component={ Login } />
        <Route name="recover-password" path="/recover-password" component={ RecoverPassword } />
        <Route name="reset-password" path="/reset-password/:token" component={ ResetPassword } />
        <Route name="signup" path="/signup" component={ Signup } />
        <Route name="profile" path="/profile" component={ ProfilePage } />
        <Route name="contact" path="/contact" component={ ContactPage } />
        <Route name="admin-login" path="/admin-login" component={ AdminLoginPage }  />   
      </Route>

      <Route path="/admin" component={ Admin }>
        <Route name="admin-home" path="/admin/home" component={ AdminHomePage } onEnter={ requireAuth } />
      </Route>

      <Route path="*" component={ NotFound } />
    </Router>
    </LocaleProvider>,
    document.getElementById('react-root')
  );
});
