import React from 'react';
import { Button, Card, Row, Col } from 'antd';
import { appConfig } from '../../modules/config';

const { appName } = appConfig;


const styles = {
  rowStyles: {height: 150, textAlign: 'center', width: 1150, maxWidth: '90%', margin: 'auto'}
}

const ExampleCard = () => {
  return (
    <Card loading={true} title='Example Card' style={{height: 300, marginTop: 10}}>
          
    </Card>
  );
}

const Jumbotron = () => (
  	<Row style={styles.rowStyles} gutter={15} type="flex" justify="center" align="middle" >
      <Col xs={24} sm={12} md={8} >
        <ExampleCard />
      </Col>
      <Col xs={24} sm={12} md={8} >
        <ExampleCard />
      </Col>
      <Col xs={24} sm={12} md={8} >
        <ExampleCard />
      </Col>
      <Col xs={24} sm={12} md={8} >
        <ExampleCard />
      </Col>
      <Col xs={24} sm={12} md={8} >
        <ExampleCard />
      </Col>
      <Col xs={24} sm={12} md={8} >
        <ExampleCard />
      </Col>
      <Col xs={24} sm={12} md={8} >
        <ExampleCard />
      </Col>
      <Col xs={24} sm={12} md={8} >
        <ExampleCard />
      </Col>
      <Col xs={24} sm={12} md={8} >
        <ExampleCard />
      </Col>
  	</Row>
);



export const Index = () => (
  	<div style={{paddingTop: 50, paddingBottom: 50}}>
  		<Jumbotron />
  	</div>
);


