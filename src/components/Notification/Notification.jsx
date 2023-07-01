import PropTypes from 'prop-types';
import { Message } from './Notification.styled';

const Notification = ({ message }) => {
  return <Message>{message}</Message>;
};
export default Notification;

Notification.propTypes = {
  message: PropTypes.string,
};
