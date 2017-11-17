import uuid from 'uuid';

export default (state = [], action) => {
  switch (action.type) {
    case 'VIDEO_FETCH':
      return [
        ...state,
        {
          message: action.userInput,
          messageId: action.messageId,
          videoId: action.videoId,
        }];
    default:
      return state;
  }
};
