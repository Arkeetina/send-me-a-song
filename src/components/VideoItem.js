import React from 'react';
import PropTypes from 'prop-types';

const VideoItem = props => (
  <div className="message-wrapper">
    <div className="message-bubble-container o__bot-msg">
      <div className="message-bubble">
        <div className="message-bubble-inner">
          <iframe
            id="ytplayer"
            type="text/html"
            title="song"
            src={`https://www.youtube.com/embed/${props.videoId}`}
            frameBorder="0"
          />
        </div>
      </div>
    </div>
  </div>
);

VideoItem.propTypes = {
  videoId: PropTypes.string,
};

export default VideoItem;
