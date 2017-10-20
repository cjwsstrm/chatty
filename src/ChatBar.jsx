import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ChatBar extends Component {

  constructor(props) {
    super();
    this.state = {
      username: props.username,
      content: ''
    };
  }

  static propTypes = { 
    username: PropTypes.string,
    addMessage: PropTypes.func,
    onUserChanged: PropTypes.func,
  };

  onMessage = (event) => {
    this.setState({
      content: event.target.value,
    });
  }

  onUser = (event) => {
    this.setState({
      username: event.target.value,
    });
  }

  onUserChanged = event => {
    if (event.key !== 'Enter') { return; }

    this.props.onUserChanged(this.state.username);
  }

  onMessageChanged = event => {
    if (event.key !== 'Enter') { return; }

    this.props.addMessage(this.state.content);
    this.setState({ content: '' });
  }

  render() {
    return (
      <footer className='chatbar'>
        <input className='chatbar-username'
          onChange={this.onUser}
          onKeyDown={this.onUserChanged}
          defaultValue={this.state.username} />
        <input className='chatbar-message'
          onChange={this.onMessage}
          onKeyDown={this.onMessageChanged}
          value={this.state.content}
          placeholder='Type a message and hit ENTER' />
      </footer>
    );
  }
}