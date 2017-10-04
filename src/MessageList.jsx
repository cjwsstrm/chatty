import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Message from './Message.jsx';

// Be ready to add before render():
// constructor(props) {
    // super();
class MessageList extends Component {
  render() {
    console.log("Rendering <MessageList/>");

    const allMessages = this.props.messages.map(message => {
        return <Message key={ message.id } 
                        username={ message.username }
                        content={ message.content } />;
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

MessageList.propTypes = {
  messages: PropTypes.array
}

export default MessageList;