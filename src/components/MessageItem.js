import React from 'react';
import PropTypes from 'prop-types';

const MessageItem = props => (
  <div className="message-wrapper">
    <div className="message-bubble-container o__user-msg">
      <div className="message-bubble">
        <div className="message-bubble-inner">
          <p className="message-text">{props.message}</p>
        </div>
      </div>
    </div>
  </div>
);

MessageItem.propTypes = {
  message: PropTypes.string,
};

export default MessageItem;
