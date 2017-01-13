import React from 'react';
import { Link } from 'react-router';
import { StyleSheet, css } from 'aphrodite'
import { Form, Input, Card, Button, Checkbox, Row, Col, Radio, Select, message } from 'antd';



// CONSTANTS & DESTRUCTURING
// ====================================
const FormItem = Form.Item;
const Option = Select.Option;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;



// STYLES
// ====================================
  const styles = StyleSheet.create({
    cardStyles: {
      "width": 400,
      "margin": "auto",
      "marginTop": "40px",
      "padding": "20px",
    },
    textField: {
      display: "block",
      width: "70%",
      margin: "auto",
      background: "#ffffff",
      backgroundColor: "#ffffff",
      marginBottom: "20px",
    },
    cardActionStyles: {
      margin: "auto"
    },
    loginButton: {
      width: 150,
      borderRadius: 4,
      padding: '10px 15px',
      display: 'block',
      textAlign: 'center',
      background: '#d70b52',
      margin: 'auto',
      color: '#fff',
      border:'none',
    }
  });


const { cardStyles } = styles;



// STYLES
// ====================================

const ContactForm = Form.create()(React.createClass({
  getInitialState () {
    return {
      loading: false
    };
  },
  handleSubmit(e) {
    e.preventDefault();
    this.setState({loading: true});

    const failure = (error) => {
      if (error && error.reason) { message.error(error.reason); }
      this.setState({loading: false});
    }

    const success = () => {
      this.props.form.resetFields();
      message.success('we have recieved your message!');
      this.setState({loading: false});
    }
    
    this.props.form.validateFields((err, values) => {
      if (err) { failure(err); return; }
      Meteor.call('utility.contactForm', values, (error, response) => {
        if (error) {  failure(error); return; }
        success();
      });
    });

  },
  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <Form onSubmit={this.handleSubmit} className="cant-find-form contact-form" style={{width: 450, margin: 'auto'}}>
      <Row gutter={15} type="flex" justify="center" align="middle"  >
      <Col span='24'>
        <FormItem label="Name">
          {getFieldDecorator('name', {
            rules: [{ required: true, message: 'Please input your first name!' }],
          })(
            <Input />
          )}
        </FormItem>
      </Col>
      <Col span='24'>
        <FormItem label="Your Email">
          {getFieldDecorator('email', {
            rules: [{ required: true, message: 'Please input your first name!' }],
          })(
            <Input />
          )}
        </FormItem>
      </Col>
      <Col span='24'>
        <FormItem label="Your Message">
          {getFieldDecorator('message', {
            rules: [{ required: true, message: 'Please input your first name!' }],
          })(
            <Input type="textarea" rows={6} />
          )}
        </FormItem>
      </Col>
      <Col span='24'>
        <p className='required-text'>* Required Field</p>
        <FormItem>
          <Button loading={this.state.loading} htmlType="submit" className={css(styles.loginButton)}>
            SEND MESSAGE
          </Button>
        </FormItem>
      </Col>
      </Row>
      </Form>
    );
  },
}));



const Jumbotron = () => {
	return (
		<Row type="flex" justify="center" align="middle" style={{marginBottom: 70, height: 150, background: '#efefef', textAlign: 'center'}}>
			<div>
				<h2 style={{fontSize: 30, lineHeight: '1.2', margin: 0}}>
		  			Got a Question, Comment or Feedback?
		  		</h2>
		  		<h4 className='primary-color'>PLEASE SHARE BELOW</h4>
			</div>
	  		
		</Row>
	);
}


// STYLES
// ====================================

export const ContactPage = () => {
	return (
		<div style={{paddingBottom: 100}}>
			<Jumbotron />
			<ContactForm />
		</div>
	);
}