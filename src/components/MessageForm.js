import React from 'react';
import {startSongFetch} from '../actions/video';
import keyWordsFilter from '../selectors/keyWordsFilter';
import { userInfo } from 'os';

export default class MessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: props.input,
    }
  }

  onTextAreaChange = event => {
    const input = event.target.value;
    this.setState (() => ({input}));
  }

  onSubmit = (event) => {
    event.preventDefault();
    let userInput = this.state.input;
    let songType = keyWordsFilter(userInput); 

    if (songType && userInput !== undefined) {
      this.props.onSubmit(songType, userInput);
      this.setState (() => ({input: ''}));
    }
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <textarea 
          type="text"
          value={this.state.input}
          onChange={this.onTextAreaChange}
        >
        </textarea>
        <button>Send</button>
      </form>
    )
  }
}
