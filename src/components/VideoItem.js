import React from 'react';

const VideoItem = props => (
  <iframe
    id="ytplayer"
    type="text/html"
    width="640"
    height="360"
    title="song"
    src={`http://www.youtube.com/embed/${props.videoID}`}
    frameBorder="0"
  />
);

export default VideoItem;
