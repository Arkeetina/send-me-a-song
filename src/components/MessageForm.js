import React from 'react';
import {startSongFetch} from '../actions/video';
import keyWordsFilter from '../selectors/keyWordsFilter';
import { userInfo } from 'os';

export default class MessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: props.input,
      error: '',
    }
  }

  onTextAreaChange = event => {
    const input = event.target.value;
    this.setState (() => ({ input }));
  }

  onSubmit = (event) => {
    event.preventDefault();

    if (!this.state.input.trim().length && (event.keyCode === 13 || event.type === 'submit')) {
      this.setState(() => ({ error: 'Please provide a message for bot' }));
    } else if (this.state.input.trim().length && (event.keyCode === 13 || event.type === 'submit')) {
      this.setState(() => ({ error: '' }));
      let userInput = this.state.input;
      let songType = keyWordsFilter(userInput); 
      this.props.onSubmit(songType, userInput);
      this.setState (() => ({input: ''}));
    }
  }

  render() {
    return (
      <form className="message-form" onSubmit={this.onSubmit}>
        {this.state.error && <p className="form__error">{this.state.error}</p>}
        <div className="flexContainer">
          <textarea
            className="msgTextarea"
            type="text"
            value={this.state.input}
            onChange={this.onTextAreaChange}
            onKeyUp={this.onSubmit}
            placeholder="ask for a song.(ex: send me a sad song)"
          >
          </textarea>
          <button 
            className="msgButton"
            type="submit"
            >
          </button>
        </div>
      </form>
    )
  }
}
