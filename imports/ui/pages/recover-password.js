import React from 'react';
import { Link, browserHistory } from 'react-router';
//modules
//material-ui stuff
import { Form, Icon, Modal, Row, Input, Button, Checkbox, Radio , Card, message } from 'antd';
import { handleRecoverPassword } from '../../modules/recover-password'


const FormItem = Form.Item;

const ForgotPassword = Form.create()(React.createClass({
  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (err) {
        message.error('error');
      }
      if (!err) {
        let email = values.email;
        handleRecoverPassword(email);
      }
      
    });
  },
  render() {
    const { form, onCancel } = this.props;
    const { getFieldDecorator } = form;
    return (
      <div style={{width: 400, margin: 'auto'}}>
      <Form onSubmit={this.handleSubmit} className="cant-find-form">
        <FormItem label='Email'>
          {getFieldDecorator('email', {
            rules: [{ required: true, message: 'Please input your email!' }],
          })(
            <Input placeholder="Email" />
          )}
        </FormItem>
        <Button style={{margin: 'auto', textAlign: 'center', textTransform: 'uppercase', padding: '10px 30px', height: 45, border: 'none', color: '#fff', backgroundColor: '#d70b52'}} type="primary" htmlType="submit" className="login-form-button">
            RECOVER PASSWORD
        </Button>
      </Form>
      </div>
    );
  },
}));





export const RecoverPassword = () => {
  return (
    <div>
      <ForgotPassword />
    </div>
  );
}




