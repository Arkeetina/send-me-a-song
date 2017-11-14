import React from 'react';
import { connect } from 'react-redux';
import MessageItem from './MessageItem';
import VideoItem from './VideoItem';
import _ from 'lodash';
import uuid from 'uuid';

export class MessageWindow extends React.Component {
  videoMessageRender = () => {
    if (this.props.video.length > 0) {
      return this.props.video.map((videoItem) => {
        const messageID = uuid();
        return (
          <div key={videoItem.messageID}>
          <MessageItem 
            key={videoItem.messageID}
            message={videoItem.message}
          />
          <VideoItem
            key={videoItem.videoID}
            videoID={videoItem.videoID}/>
          </div>
        )
      });
    } else {
      return (<div>Please ask me for a song</div>);
    }
  }

  render () {
    return (
      <div>
        {this.videoMessageRender()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    video: state.video,
  };
};

export default connect(mapStateToProps)(MessageWindow);
