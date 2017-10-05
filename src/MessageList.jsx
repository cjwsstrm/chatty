import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Message from './Message.jsx';

export default class MessageList extends Component {

  static propTypes = {
    messages: PropTypes.array
  };

  render() {
    const allMessages = this.props.messages.map(message => {
      if (message.type === 'incomingMessage') {
        return <Message key={ message.id } 
                        username={ message.username }
                        content={ message.content } />;
      } 
      if (message.type === 'incomingNotification') {
        return <Message key={ message.id } 
                        notification={ message.content } />;
      }
    });
    return (     
    <div>            
      <main className='messages'>
      {allMessages}
      </main> 
    </div>
    );                       
  }
}
