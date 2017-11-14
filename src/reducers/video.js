import uuid from 'uuid';

export default (state = [], action) => {
  switch (action.type) {
    case 'VIDEO_FETCH':
      return [
        ...state,
        {
          videoID: action.video,
          message: action.userInput,
          messageID: action.video,
        }];
    default:
      return state;
  }
};
