import React from 'react';
import { Link } from 'react-router';
import { handleSignup } from '../../modules/signup';
import { StyleSheet, css } from 'aphrodite'
import { Form, Icon, Input, Card, Button, Checkbox, Row } from 'antd';
const FormItem = Form.Item;

  const styles = StyleSheet.create({
    cardStyles: {
      "maxWidth": 400,
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
      width: '100%'
    }
  });

const NormalLoginForm = Form.create()(React.createClass({
  getInitialState () {
    return {
      loading: false
    };
  },
  handleSubmit(e) {
    e.preventDefault();
    this.setState({loading: true});

    const failure = () => {
      this.setState({loading: false});
    }

    const sucess = () => {
      this.setState({loading: false});
    }

    this.props.form.validateFields((err, values) => {
      if (err) { failure(); return; }
      setTimeout(() => {
        let { firstName, lastName, emailAddress, password } = values;
        handleSignup(firstName, lastName, emailAddress, password );
        sucess();
      }, 2000);
    });

  },
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('firstName', {
            rules: [{ required: true, message: 'Please input your first name!' }],
          })(
            <Input addonBefore={<Icon type="user" />} placeholder="First name" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('lastName', {
            rules: [{ required: true, message: 'Please input your last name!' }],
          })(
            <Input addonBefore={<Icon type="user" />} placeholder="Last name" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('emailAddress', {
            rules: [{ required: true, message: 'Please input your email!' }],
          })(
            <Input addonBefore={<Icon type="mail" />} placeholder="Username" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input a Password!' }],
          })(
            <Input addonBefore={<Icon type="lock" />} type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem>
          <Button loading={this.state.loading} type="primary" htmlType="submit" className={css(styles.loginButton)}>
            Create Account
          </Button>
          Or <Link to='/login'>Login</Link>
        </FormItem>
      </Form>
    );
  },
}));



export const Signup = () => {
  return (
    <Row>
      <Card 
        className={css(styles.cardStyles) + ' first-step'} 
        title={<p style={{textAlign: 'center'}}>Create a Student Account</p>}
      >
        <NormalLoginForm />
      </Card>
    </Row>
  );
}


