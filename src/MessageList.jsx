import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Message from './Message.jsx';

// Be ready to add before render():
// constructor(props) {
    // super();
export default class MessageList extends Component {

  static propTypes = {
    messages: PropTypes.array
  };

  render() {
    console.log("Rendering <MessageList/>");
    // console.log(this.props.messages[0].content);
    const allMessages = this.props.messages.map(message => {
      console.log(message.type);
      if (message.type === 'incomingMessage') {
        return <Message key={ message.id } 
                        username={ message.username }
                        content={ message.content } />;
      } else if (message.type === 'incomingNotification') {
        return <Message key={ message.id } 
                        notification={ message.content } />;
      }
    });
    return (     
        <div>            
            <main className="messages">
            {allMessages}
            </main> 
        </div>
    );                       
  }
}
