import { notification } from 'antd';

const error = (data) => {
  let body = null;
  switch (true) {
    case !!data.error:
      body = {
        message: 'Bad Request',
        description: data.error,
      };
      break;
    default:
      body = {
        message: 'Bad Request',
        description: 'Something wents wrong',
      };
  }
  body && notification.error(body);
};

const success = (description) => {
  notification.success({
    message: 'Operation completed',
    description,
  });
};

export default {
  error,
  success,
};