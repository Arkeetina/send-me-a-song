export default (songsList) => {
  const randomNum = Math.floor(Math.random() * songsList.length);
  const randomSong = songsList[randomNum];
  return randomSong;
};
