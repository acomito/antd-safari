import React from 'react';
import { Button, Card, Row, Col } from 'antd';
import { appConfig } from '../../modules/config';

const { appName } = appConfig;


const styles = {
  buttonStyles: {
    margin: 10
  }
}

const Jumbotron = () => (
  	<Row style={{height: 150, textAlign: 'center'}} type="flex" justify="center" align="middle" >
  		<div>
	  		<h2>{ appName }</h2>
	    	<p>An Ant Design framework starting point for Meteor/React applications.</p>
	    	<Button style={styles.buttonStyles} href='https://github.com/acomito/space-bug' type="primary">Space Bug Docs</Button>
        <Button style={styles.buttonStyles} href='https://ant.design/docs/react/introduce' type="ghost">Ant Docs</Button>
        <Button style={styles.buttonStyles} href='https://www.meteor.com/' type="dashed">Meteor Docs</Button>
	    	</div>
  	</Row>
);



export const Index = () => (
  	<div>
  		<Jumbotron />
  	</div>
);


