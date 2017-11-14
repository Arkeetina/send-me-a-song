const sadKeyWords = ['sad', 'depressing', 'blue'];
const happyKeyWords = ['fun', 'cheerful', 'upbeat', 'happy'];
const relaxingKeyWords = ['lounge', 'relaxing', 'calming'];

export default ((userInput) => {
  const userInputToLowCase = userInput.toLowerCase();

  for (let i = 0; i < sadKeyWords.length; i++) {
    if (userInputToLowCase.indexOf(sadKeyWords[i]) !== -1) {
      return 'sad';
    }
  }

  for (let i = 0; i < happyKeyWords.length; i++) {
    if (userInputToLowCase.indexOf(happyKeyWords[i]) !== -1) {
      return 'happy';
    }
  }

  for (let i = 0; i < relaxingKeyWords.length; i++) {
    if (userInputToLowCase.indexOf(relaxingKeyWords[i]) !== -1) {
      return 'relaxing';
    }
  }

  return 'default';
});
