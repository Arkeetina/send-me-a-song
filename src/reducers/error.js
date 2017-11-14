export default (state = {}, action) => {
  switch (action.type) {
    case 'SET_ERROR':
      return action.error.response.status;
    default:
      return state;
  }
};
