import React from 'react';
import { Link, browserHistory } from 'react-router';
import { StyleSheet, css } from 'aphrodite'
//modules
import { handleLogin } from '../../modules/login';
//material-ui stuff

import { Form, Icon, Input, Card, Button, Checkbox } from 'antd';
const FormItem = Form.Item;

  const styles = StyleSheet.create({
    cardStyles: {
      "maxWidth": 400,
      "margin": "auto",
      "marginTop": "40px",
      "padding": "20px",
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

    console.log(this.state.loading)
    this.setState({loading: true});
    const doneLoading = () => this.setState({loading: false})
    this.props.form.validateFields((err, values) => {
      if (!err) {
        setTimeout(function(){
          let email = values.emailAddress;
          let password = values.password;
          handleLogin(email, password);
          doneLoading();
        }, 3000);
      }
     
    });

  },
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('emailAddress', {
            rules: [{ required: true, message: 'Please input your email!' }],
          })(
            <Input addonBefore={<Icon type="mail" />} placeholder="Email" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input addonBefore={<Icon type="lock" />} type="password" placeholder="Password" />
          )}
        </FormItem>
          <Button loading={this.state.loading} type="primary" htmlType="submit" className={css(styles.loginButton)}>
            Login
          </Button>
          Or <Link to='/signup'>register now!</Link>
      </Form>
    );
  },
}));



export const Login = () => {
  return (
    <Card 
      className={css(styles.cardStyles)} 
      title={<p style={{textAlign: 'center'}}>Login</p>}
    >
      <NormalLoginForm />
    </Card>
  );
}


