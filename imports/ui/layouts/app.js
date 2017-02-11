import React from 'react';
import { StyleSheet, css } from 'aphrodite';
//import AppNavigation from '../containers/app-navigation';
import { browserHistory, Link } from 'react-router';
import { Menu, Icon, Row, Col, Button, message } from 'antd';
import { SocialIcon } from 'react-social-icons';
import { appConfig } from '../../modules/config';
import { Footer } from './footer';



// CONSTANTS & DESTRUCTURING
// ====================================
const { appName } = appConfig;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


// STYLES
// ====================================
const styles = StyleSheet.create({
  footerStyles: {
    color: '#666', 
    padding: '20px 5%', 
    height: 150, 
    backgroundColor: '#fafafa',
    textAlign: 'center'
  },
  appNavigation: {
    height: 55, 
    zIndex: 1000, 
    paddingLeft: 95, 
    color: '#fff', 
    backgroundColor: '#da5347', 
    borderBottom: '1px solid #e9e9e9'
  },
  menuStyles: {
    height: 54, 
    backgroundColor: '#da5347', 
    borderBottom: '0px solid transparent'
  },
});

const { footerStyles, appNavigation, menuStyles } = styles;



// METHODS
// ====================================
const logout = () => {
    const hide = message.loading('logging you out...', 0);
    setTimeout(function(){
      hide();
      Meteor.logout(() => browserHistory.push('/'));
    }, 2000);
    return;
}



// INTERNAL COMPONENTS
// ====================================
const AppNavigation = React.createClass({
  getInitialState() {
      return {
        current: this.props.pathname
      };
  },
  handleClick(e) {
    if (e.key === 'logout') { logout(); return; }
    browserHistory.push(e.key);
    this.setState({ current: e.key });
    return;  
  },
  render() {
    const { userExists, pathname } = this.props;
    return (
    <Row type="flex" justify="space-around" align="middle"  className={css(appNavigation) + ' landing-menu'}>
      <Col span='16'>
        <Link to='/'>
          <h2 style={{fontSize: 21, color: '#fff'}}>
            {appName}
            <Icon type="rocket" color="#fff" style={{fontWeight: 200, fontSize: 26, marginLeft: 5 }}/>
          </h2>
        </Link>
      </Col>
      <Col span='8'>
      </Col>  
    </Row>
    );
  },
});



// EXTERNAL COMPONENTS
// ====================================
export const App = React.createClass({
  propTypes: {
    children: React.PropTypes.element.isRequired,
  },
  render() {
    return (
        <div style={{position: 'relative'}}>
          <AppNavigation  currentPath={this.props.location.pathname}  userExists={Meteor.userId()} />
            <div style={{minHeight: '100vh'}}>
             { this.props.children }
            </div>
            <Footer />
        </div>
    );
  }
});



