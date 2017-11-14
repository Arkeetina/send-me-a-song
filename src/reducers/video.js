import uuid from 'uuid';

export default (state = [], action) => {
  switch (action.type) {
    case 'VIDEO_FETCH':
      return [
        ...state,
        {
          videoID: action.video.data.items[0].id.videoId,
          message: action.userInput,
          messageID: uuid(),
        }];
    default:
      return state;
  }
};
