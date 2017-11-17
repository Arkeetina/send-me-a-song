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
      <div className="">
        <div className="content-container">
          <h1 className="">I am a song bot, ask me for a song</h1>
        </div>
        <div className="content-container">
          <MessageWindow />
          <MessageForm 
            onSubmit={this.onSubmit}
          />
        </div>
      </div>
    )
  }
};

const mapDispatchToProps = (dispatch, props) => ({
  startSongFetch: (songType, userInput) => dispatch(startSongFetch(songType, userInput)),
});

// const mapStateToProps = (state) => {
//   return {
//     videoID: state.video,
//   };
// }

export default connect(null, mapDispatchToProps)(ConversationPage);