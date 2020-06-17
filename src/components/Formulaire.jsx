import React, { Component } from 'react';

class Formulaire extends Component {
  constructor(props) {
    super(props);
    const { length } = this.props;
    this.state = {
      message: '',
      length,
    };
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleOnKeyup = this.handleOnKeyup.bind(this);
  }

  createMessage() {
    const { addMessage, pseudo, length } = this.props;
    const { message } = this.state;

    const myMessage = { pseudo, message };
    addMessage(myMessage);
    this.setState({ message: '', length });
  }

  handleOnSubmit(e) {
    e.preventDefault();
    this.createMessage();
  }

  handleOnKeyup(e) {
    if (e.key === 'Enter') {
      this.createMessage();
    }
  }

  handleChange(e) {
    const { length } = this.props;

    this.setState({
      message: e.target.value,
      length: length - e.target.value.length,
    });
  }

  render() {
    const { message, length } = this.state;
    return (
      <form className='form' onSubmit={this.handleOnSubmit}>
        <textarea
          maxLength={length}
          value={message}
          onChange={this.handleChange}
          onKeyUp={this.handleOnKeyup}
          required
        />
        <div className='info'>{length}</div>
        <button type='submit'>envoyer</button>
      </form>
    );
  }
}

export default Formulaire;
