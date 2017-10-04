import React, {Component} from 'react';
import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {name: "Thatguy"}, 
      messages: [
        {
          id: 1,
          username: "CJ",
          content: "What's happening?"
        },
        {
          id: 2,
          username: "Anonymous",
          content: "You're building an app, that's what"
        }
      ],
      nextId: 3,
    };
    this.addMessage = this.addMessage.bind(this);
  }


  addMessage (newPost) {
    const newMessage = {
      id: this.state.nextId,
      username: this.state.currentUser.name,
      content: newPost
    };
    const updatedMessages = this.state.messages.concat(newMessage);
    this.setState({
      messages: updatedMessages,
      nextId: this.state.nextId + 1
    });
  }

  render() {
    console.log("Rendering <App/>");
    return (
      <div>
        <nav className="navbar">
            <a href="/" className="navbar-brand">Chatty</a>
        </nav>           
        <MessageList messages= { this.state.messages } />
        <ChatBar currentUser= { this.state.currentUser }
                 addMessage= { this.addMessage } />  
      </div>
    );                  
  }
}
export default App;
