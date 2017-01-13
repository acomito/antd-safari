//top-level imports
import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { browserHistory, Link } from 'react-router';
//antd
import { Menu, Icon, Row, Col, Button  } from 'antd';
//npm packages
import { SocialIcon } from 'react-social-icons';
//modules
import { appConfig } from '../../modules/config';




// CONSTANTS
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
  iconStyles: {
    height: 18, 
    width: 18,
    marginRight: 5
  }
});

const { footerStyles, iconStyles } = styles;



// EXPORTED COMPONENT
// ====================================

export const Footer = () => {
  return (
    <Row type="flex" justify="center" align="middle" className={css(footerStyles)}>
      <Col span='8'>
      </Col>
      <Col span='8'>
      </Col>
      <Col span={8} style={{textAlign: 'right'}}>
        <div style={{marginBottom: 10}}>
          <SocialIcon network="facebook"  className={css(iconStyles)} color={'#666'} />
          <SocialIcon network="twitter"   className={css(iconStyles)} color={'#666'} />
          <SocialIcon network="instagram" className={css(iconStyles)} color={'#666'} />
        </div>
        <div>
          <Link style={{marginRight: 10, color: '#888'}}>Privacy Policy</Link>
          <Link style={{marginRight: 10, color: '#888'}}>Help</Link>
          <span>&copy; { appName }, 2017</span>
        </div>
      </Col>
    </Row>
  );
}
