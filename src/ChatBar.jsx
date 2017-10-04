import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ChatBar extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      content: ''
    };
   
    this.onContent = this.onContent.bind(this);
    this.onEnter = this.onEnter.bind(this);
    this.onUser = this.onUser.bind(this);
  }

  onContent(event) {
    this.setState({
      content: event.target.value,
    });
  }

  onUser(event) {
    this.setState({
      username: event.target.value,
    });
  }

  onEnter(event) {
    if(event.key === 'Enter') {
      this.props.addMessage(this.state.content)
    }
  }
  
  render() {
    // console.log("Rendering <ChatBar/>");
    return (            
        <footer className="chatbar">
          <input className="chatbar-username"
            onChange={ this.onUser }
            onKeyDown={ this.onEnter }
            defaultValue= { this.props.currentUser.name } />
          <input className="chatbar-message"
             onChange={ this.onContent }
             onKeyDown={ this.onEnter }
             value={ this.state.content } 
             placeholder="Type a message and hit ENTER" />
        </footer>
    );                       
  }
} 

ChatBar.propTypes = {
  currentUser: PropTypes.object,
  addMessage: PropTypes.func
}

export default ChatBar;