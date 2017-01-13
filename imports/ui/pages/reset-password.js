import React from 'react';
import { handleResetPassword } from '../../modules/reset-password';
import { StyleSheet, css } from 'aphrodite'
import { Link } from 'react-router';
import { Form, Icon, Input, Card, Button, Checkbox } from 'antd';
const FormItem = Form.Item;

const styles = {
  cardStyles: {
    width: "50%",
    padding: "40px",
    margin: "40px auto",
    marginTop: "40px", 
  },
  textField: {
    width: "90%"
  },
  snackBar: {
    backgroundColor: "#FF4081"
  }
}


const ResetPasswordForm = Form.create()(React.createClass({
  getInitialState () {
    return {
      loading: false
    };
  },
  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (err) {
        failure();
      }
      if (!err) {
        let newPassword = values.newPassword;
        let repeatNewPassword = values.repeatNewPassword;
        handleResetPassword(newPassword, repeatNewPassword, this.props.token);
      }
    });

  },
  render() {
    const { getFieldDecorator } = this.props.form;

    const newPasswordRules = [
      { required: true, message: 'Please input a new password!' }
    ];

    const repeatNewPassword = [
      { required: true, message: 'Please repeat the new password!' }
    ];

    return (
      <Form onSubmit={this.handleSubmit} className="cant-find-form">
        <FormItem>
          {getFieldDecorator('newPassword', { rules: newPasswordRules })(
            <Input addonBefore={<Icon type="lock" />} type="password" placeholder="New password" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('repeatNewPassword', { rules: repeatNewPassword })(
            <Input addonBefore={<Icon type="lock" />} type="password" placeholder="Repeat new password" />
          )}
        </FormItem>
        <FormItem>
          <Button loading={this.state.loading} type="primary" htmlType="submit" className={css(styles.loginButton)}>
            Reset Password
          </Button>
        </FormItem>
      </Form>
    );
  }
}));


export class ResetPassword extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      canSubmit: false,
      token: this.props.params.token,
    }
  }

  render() {
    return (
      <Card style={styles.cardStyles} title={'Reset Your Password'} >
        <ResetPasswordForm token={this.state.token} />
      </Card>
    );
  }

}

