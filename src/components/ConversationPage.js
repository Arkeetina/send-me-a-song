import React from 'react';
import {connect} from 'react-redux';
import {startSongFetch, startMessageRender} from '../actions/video';
import MessageForm from './MessageForm';
import MessageWindow from './MessageWindow';
 
class ConversationPage extends React.Component {
  onSubmit = (songType, userInput) => {
    this.props.startSongFetch(songType, userInput);
  }

  render() {
    return (
      <div className="app-container">

        <div className="header-container">
          <div className="content-container">
            <div className="header-logo"><img src="/images/logo_waveform.png" /></div>
            <h1 className="chat-header">I am a song bot. Ask me for a song</h1>
          </div>
        </div>

        <div className="chat-container">
          <div className="content-container">
            <MessageWindow />
          </div>
        </div>

        <div className="message-form-container">
          <div className="content-container">
            <MessageForm 
              onSubmit={this.onSubmit}
            />
          </div>
        </div>
      </div>
    )
  }
};

const mapDispatchToProps = (dispatch, props) => ({
  startSongFetch: (songType, userInput) => dispatch(startSongFetch(songType, userInput)),
});

export default connect(null, mapDispatchToProps)(ConversationPage);