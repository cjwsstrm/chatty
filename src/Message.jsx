import React, {Component} from 'react';
import PropTypes from 'prop-types';

// class Message extends Component {
//   render() {
//     console.log("Rendering <Message/>");
//     return (   
//     <div>              
//       <div className="message">
//         <span className="message-username">{this.props.username}</span>
//         <span className="message-content">{this.props.content}</span>
//       </div>
//     </div>
//     );                       
//   }
// }

Message.propTypes = {
  username: PropTypes.string,
  content: PropTypes.string,
  notification: PropTypes.string
};


// export default Message;

export default function Message({username, content, notification}) {
  // console.log(content)
  return (
    <div>              
      <div className="message">
      <div className="message-system">{notification}</div>
        <span className="message-username">{username}</span>
        <span className="message-content">{content}</span>
      </div>
    </div>
  );
}