import axios from 'axios';
import database from '../firebase/firebase';
import randomSongSelector from '../selectors/randomSongSelector';

const youtubeAPIKey = process.env.YOUTUBE_API_KEY;
const ROOT_URL = 'https://www.googleapis.com/youtube/v3/search';

export const videoFetch = (video, userInput) => ({
  type: 'VIDEO_FETCH',
  video,
  userInput,
});

export const setError = error => ({
  type: 'SET_ERROR',
  error,
});

export const startSongFetch = (songType, userInput) => {
  return (dispatch) => {
    return database.ref(`${songType}-songs`)
      .once('value')
      .then((snapshot) => {
        const songsList = [];
        snapshot.forEach((childSnapshot) => {
          const item = childSnapshot.val();
          songsList.push(item);
        });
        const randSong = randomSongSelector(songsList);
        return randSong;
      })
      .then((randSong) => {
        const params = {
          part: 'snippet',
          key: youtubeAPIKey,
          q: randSong,
          type: 'video',
        };

        axios.get(ROOT_URL, { params })
          .then((video) => {
            dispatch(videoFetch(video, userInput));
          })
          .catch((error) => {
            dispatch(setError(error));
          });
      })
      .catch((error) => {
        dispatch(setError(error));
      });
  };
};
