import React, { Component } from 'react';

import { Redirect } from 'react-router-dom';

class Connexion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pseudo: '',
      redirect: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ pseudo: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ redirect: true });
  }

  render() {
    const { pseudo, redirect } = this.state;

    if (redirect) {
      return <Redirect push to={`/pseudo/${pseudo}`} />;
    }

    return (
      <div>
        <div className='connexionBox'>
          <form className='connexion' onSubmit={this.handleSubmit}>
            <input
              type='text'
              placeholder='pseudo'
              required
              value={pseudo}
              onChange={this.handleChange}
            />
            <button type='submit'>Go</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Connexion;
