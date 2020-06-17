import React, { createRef } from 'react';
import '../App.css';
import '../animations.css';

import Formulaire from './Formulaire';
import Message from './Message';

// FIREBASE
import base from '../base';

//ANIMATIONS
import { CSSTransition, TransitionGroup } from 'react-transition-group';

class Chat extends React.Component {
  constructor(props) {
    super(props);
    const {
      match: {
        params: { pseudo },
      },
    } = this.props;
    this.state = {
      messages: {},
      pseudo,
    };
    this.addMessage = this.addMessage.bind(this);
    this.isUser = this.isUser.bind(this);
  }

  messagesRef = createRef();

  componentDidMount() {
    base.syncState('/', {
      context: this,
      state: 'messages',
    });
  }

  componentDidUpdate() {
    const ref = this.messagesRef.current;
    ref.scrollTop = ref.scrollHeight;
  }

  addMessage(message) {
    const messages = { ...this.state.messages };
    messages[`message-${Date.now()}`] = message;
    Object.keys(messages)
      .slice(0, -10)
      .forEach((key) => {
        messages[key] = null;
      });
    this.setState({ messages });
  }

  isUser(userPseudo) {
    const { pseudo } = this.state;
    return userPseudo === pseudo;
  }

  render() {
    const { pseudo, messages } = this.state;
    const userMessages = Object.keys(messages).map((key) => (
      <CSSTransition key={key} timeout={300} classNames='fade'>
        <Message
          message={messages[key].message}
          pseudo={messages[key].pseudo}
          isUser={this.isUser}
        />
      </CSSTransition>
    ));

    return (
      <div className='box'>
        <div>
          <div className='messages' ref={this.messagesRef}>
            <TransitionGroup className='message'>
              {userMessages}
            </TransitionGroup>
          </div>
        </div>
        <Formulaire length={140} pseudo={pseudo} addMessage={this.addMessage} />
      </div>
    );
  }
}

export default Chat;
