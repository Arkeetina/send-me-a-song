import axios from 'axios';
import uuid from 'uuid';
import database from '../firebase/firebase';
import randomSongSelector from '../selectors/randomSongSelector';
import { VIDEO_FETCH, SET_ERROR, SET_LOADING_STATUS } from './types';

const youtubeAPIKey = process.env.YOUTUBE_API_KEY;
const ROOT_URL = 'https://www.googleapis.com/youtube/v3/search';

export const setVideoMessage = (videoId, userInput) => ({
  type: VIDEO_FETCH,
  videoId,
  userInput,
  messageId: uuid(),
});

export const setError = showError => ({
  type: SET_ERROR,
  showError,
});

const setLoadingStatus = status => ({
  type: SET_LOADING_STATUS,
  status,
})

const fetchSong = async (songType) => {
  const songList = await database.ref(`${songType}-songs`)
    .once('value')
    .then((snapshot) => {
      const songsList = [];
      snapshot.forEach((childSnapshot) => {
        const item = childSnapshot.val();
        songsList.push(item);
      });
      return songsList
    })

  if (songList.length===0) return ''

  const randSong = randomSongSelector(songList);
  return randSong;
};

const fetchYoutubeVideo = async (randSong) => {
  try {
    const params = {
      part: 'snippet',
      key: youtubeAPIKey,
      q: randSong,
      type: 'video',
    };
    
    const video = await axios.get(ROOT_URL, { params });
    return video;
  } catch(e) {
    return ''
  }
};

export const startSongFetch = (songType, userInput) => async dispatch => {
  dispatch(setLoadingStatus(true));

  const song = await fetchSong(songType)
  if (!song) return dispatch(setError(true));

  const video = await fetchYoutubeVideo(song);
  if (!video) return dispatch(setError(true));

  dispatch(setLoadingStatus(false));
  dispatch(setVideoMessage(video.data.items[0].id.videoId, userInput));
}
