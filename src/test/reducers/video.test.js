import videoReducer from '../../reducers/video';
import videos from '../fixtures/videoData';

test('should set default state', () => {
  const state = videoReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should set video ID, message ID, user message', () => {
  const video = {
    message: 'sad',
    messageId: '123ss',
    videoId: '123ss',
  };

  const action = {
    type: 'VIDEO_FETCH',
    userInput: video.message,
    messageId: video.messageId,
    videoId: video.videoId,
  };

  const state = videoReducer(videos, action);
  expect(state).toEqual([...videos, video]);
});