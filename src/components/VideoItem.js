import React from 'react';

const VideoItem = props => (
  <div className="message-wrapper">
    <div className="message-bubble-container o__bot-msg">
      <div className="message-bubble">
        <div className="message-bubble-inner">
          <iframe
            id="ytplayer"
            type="text/html"
            width="640"
            height="360"
            title="song"
            src={`http://www.youtube.com/embed/${props.videoId}`}
            frameBorder="0"
          />
        </div>
      </div>
    </div>
  </div>
);

export default VideoItem;
