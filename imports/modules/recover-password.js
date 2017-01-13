import { Accounts } from 'meteor/accounts-base';
import { message } from 'antd';

const handleRecovery = (email) => {
  Accounts.forgotPassword({
    email: email,
  }, (error) => {
    if (error) {
      message.error(error.reason, 3);
    } else {
      message.success('Check your inbox for a reset link!', 3);
    }
  });
};


export const handleRecoverPassword = (email) => {
  handleRecovery(email);
};
