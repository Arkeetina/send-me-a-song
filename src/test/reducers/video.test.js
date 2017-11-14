import videoReducer from '../../reducers/video';
import videos from '../fixtures/videoData';

test('should set default state', () => {
  const state = videoReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should fetch video ID', () => {
  const video = {
    message: 'some song',
    messageID: '123ss',
    videoID: '123ss',
  };
  const action = {
    type: 'VIDEO_FETCH',
    message: video.message,
    messageID: video.messageID,
    videoID: video.videoID,
  };

  const state = videoReducer(videos, action);
  expect(state).toEqual([...videos, video]);
});


// const action = {
//   type: 'VIDEO_FETCH',
//   video,
// };
// const state = videoReducer(videos, action);
// expect(state.length).toBe(4);
// expect(state).toEqual([...videos, video]);