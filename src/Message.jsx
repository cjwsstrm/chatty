import React, {Component} from 'react';
import PropTypes from 'prop-types';

Message.propTypes = {
  username: PropTypes.string,
  content: PropTypes.string,
  notification: PropTypes.string
};

export default function Message({ username, content, notification }) {
  return (
    <div>              
      <div className='message'>
      <div className='message-system'>{notification}</div>
        <span className='message-username'>{username}</span>
        <span className='message-content'>{content}</span>
      </div>
    </div>
  );
}